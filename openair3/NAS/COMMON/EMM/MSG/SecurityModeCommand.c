/*
 * Copyright (c) 2015, EURECOM (www.eurecom.fr)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those
 * of the authors and should not be interpreted as representing official policies,
 * either expressed or implied, of the FreeBSD Project.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>


#include "TLVEncoder.h"
#include "TLVDecoder.h"
#include "NASSecurityModeCommand.h"

int decode_security_mode_command(security_mode_command_msg *security_mode_command, uint8_t *buffer, uint32_t len)
{
  uint32_t decoded = 0;
  int decoded_result = 0;

  // Check if we got a NULL pointer and if buffer length is >= minimum length expected for the message.
  CHECK_PDU_POINTER_AND_LENGTH_DECODER(buffer, SECURITY_MODE_COMMAND_MINIMUM_LENGTH, len);

  /* Decoding mandatory fields */
  if ((decoded_result = decode_nas_security_algorithms(&security_mode_command->selectednassecurityalgorithms, 0, buffer + decoded, len - decoded)) < 0)
    return decoded_result;
  else
    decoded += decoded_result;

  if ((decoded_result = decode_u8_nas_key_set_identifier(&security_mode_command->naskeysetidentifier, 0, *(buffer + decoded) & 0x0f, len - decoded)) < 0)
    return decoded_result;

  decoded++;

  if ((decoded_result = decode_ue_security_capability(&security_mode_command->replayeduesecuritycapabilities, 0, buffer + decoded, len - decoded)) < 0)
    return decoded_result;
  else
    decoded += decoded_result;

  /* Decoding optional fields */
  while(len - decoded > 0) {
    uint8_t ieiDecoded = *(buffer + decoded);

    /* Type | value iei are below 0x80 so just return the first 4 bits */
    if (ieiDecoded >= 0x80)
      ieiDecoded = ieiDecoded & 0xf0;

    switch(ieiDecoded) {
    case SECURITY_MODE_COMMAND_IMEISV_REQUEST_IEI:
      if ((decoded_result =
             decode_imeisv_request(&security_mode_command->imeisvrequest,
                                   SECURITY_MODE_COMMAND_IMEISV_REQUEST_IEI, buffer + decoded,
                                   len - decoded)) <= 0)
        return decoded_result;

      decoded += decoded_result;
      /* Set corresponding mask to 1 in presencemask */
      security_mode_command->presencemask |= SECURITY_MODE_COMMAND_IMEISV_REQUEST_PRESENT;
      break;

    case SECURITY_MODE_COMMAND_REPLAYED_NONCEUE_IEI:
      if ((decoded_result =
             decode_nonce(&security_mode_command->replayednonceue,
                          SECURITY_MODE_COMMAND_REPLAYED_NONCEUE_IEI, buffer +
                          decoded, len - decoded)) <= 0)
        return decoded_result;

      decoded += decoded_result;
      /* Set corresponding mask to 1 in presencemask */
      security_mode_command->presencemask |= SECURITY_MODE_COMMAND_REPLAYED_NONCEUE_PRESENT;
      break;

    case SECURITY_MODE_COMMAND_NONCEMME_IEI:
      if ((decoded_result =
             decode_nonce(&security_mode_command->noncemme,
                          SECURITY_MODE_COMMAND_NONCEMME_IEI, buffer + decoded, len -
                          decoded)) <= 0)
        return decoded_result;

      decoded += decoded_result;
      /* Set corresponding mask to 1 in presencemask */
      security_mode_command->presencemask |= SECURITY_MODE_COMMAND_NONCEMME_PRESENT;
      break;

    default:
      errorCodeDecoder = TLV_DECODE_UNEXPECTED_IEI;
      return TLV_DECODE_UNEXPECTED_IEI;
    }
  }

  return decoded;
}

int encode_security_mode_command(security_mode_command_msg *security_mode_command, uint8_t *buffer, uint32_t len)
{
  int encoded = 0;
  int encode_result = 0;

  /* Checking IEI and pointer */
  CHECK_PDU_POINTER_AND_LENGTH_ENCODER(buffer, SECURITY_MODE_COMMAND_MINIMUM_LENGTH, len);

  if ((encode_result =
         encode_nas_security_algorithms(&security_mode_command->selectednassecurityalgorithms,
                                        0, buffer + encoded, len - encoded)) < 0)        //Return in case of error
    return encode_result;
  else
    encoded += encode_result;

  *(buffer + encoded) = (encode_u8_nas_key_set_identifier(&security_mode_command->naskeysetidentifier) & 0x0f);
  encoded++;

  if ((encode_result =
         encode_ue_security_capability(&security_mode_command->replayeduesecuritycapabilities,
                                       0, buffer + encoded, len - encoded)) < 0)        //Return in case of error
    return encode_result;
  else
    encoded += encode_result;

  if ((security_mode_command->presencemask & SECURITY_MODE_COMMAND_IMEISV_REQUEST_PRESENT)
      == SECURITY_MODE_COMMAND_IMEISV_REQUEST_PRESENT) {
    if ((encode_result =
           encode_imeisv_request(&security_mode_command->imeisvrequest,
                                 SECURITY_MODE_COMMAND_IMEISV_REQUEST_IEI, buffer + encoded, len -
                                 encoded)) < 0)
      // Return in case of error
      return encode_result;
    else
      encoded += encode_result;
  }

  if ((security_mode_command->presencemask & SECURITY_MODE_COMMAND_REPLAYED_NONCEUE_PRESENT)
      == SECURITY_MODE_COMMAND_REPLAYED_NONCEUE_PRESENT) {
    if ((encode_result =
           encode_nonce(&security_mode_command->replayednonceue,
                        SECURITY_MODE_COMMAND_REPLAYED_NONCEUE_IEI, buffer + encoded, len
                        - encoded)) < 0)
      // Return in case of error
      return encode_result;
    else
      encoded += encode_result;
  }

  if ((security_mode_command->presencemask & SECURITY_MODE_COMMAND_NONCEMME_PRESENT)
      == SECURITY_MODE_COMMAND_NONCEMME_PRESENT) {
    if ((encode_result = encode_nonce(&security_mode_command->noncemme,
                                      SECURITY_MODE_COMMAND_NONCEMME_IEI, buffer + encoded, len -
                                      encoded)) < 0)
      // Return in case of error
      return encode_result;
    else
      encoded += encode_result;
  }

  return encoded;
}

