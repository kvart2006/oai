var group____rlc__am__internal__impl__ =
[
    [ "RLC AM Input SDU buffer Internal Reference Implementation", "group____rlc__am__internal__input__sdu__impl__.html", "group____rlc__am__internal__input__sdu__impl__" ],
    [ "RLC AM Reassembly Internal Reference Implementation", "group____rlc__am__internal__reassembly__impl__.html", "group____rlc__am__internal__reassembly__impl__" ],
    [ "RLC AM Receiver Internal Reference Implementation", "group____rlc__am__internal__receiver__impl__.html", "group____rlc__am__internal__receiver__impl__" ],
    [ "RLC AM Retransmitter Internal Reference Implementation", "group____rlc__am__internal__retransmit__impl__.html", "group____rlc__am__internal__retransmit__impl__" ],
    [ "RLC AM Segmentation Internal Reference Implementation", "group____rlc__am__internal__segment__impl__.html", "group____rlc__am__internal__segment__impl__" ],
    [ "RLC AM Status Report Reference Implementation", "group____rlc__am__status__report__impl__.html", "group____rlc__am__status__report__impl__" ],
    [ "RLC AM Timers Reference Implementation", "group____rlc__am__timers__impl__.html", "group____rlc__am__timers__impl__" ],
    [ "RLC AM Windowing Reference Implementation", "group____rlc__am__windowing__impl__.html", "group____rlc__am__windowing__impl__" ],
    [ "rlc_am_pdu_sn_10", "structrlc__am__pdu__sn__10.html", [
      [ "b1", "structrlc__am__pdu__sn__10.html#ae9bf9fb4c40b3264e7d45e455001d580", null ],
      [ "b2", "structrlc__am__pdu__sn__10.html#a9d63d8e618b33e60c974fb7f2e0dc3ea", null ],
      [ "data", "structrlc__am__pdu__sn__10.html#a02daa39e1997af3de6281a8e2549ab8b", null ]
    ] ],
    [ "rlc_am_entity_s", "structrlc__am__entity__s.html", [
      [ "rb_id", "structrlc__am__entity__s.html#ae6a9043aa3a8b1380d85280880a04705", null ],
      [ "channel_id", "structrlc__am__entity__s.html#a1122a65ecae57f102a198dd0f1d27967", null ],
      [ "is_data_plane", "structrlc__am__entity__s.html#aae0ced5008049e2932cd44484f0bbb9c", null ],
      [ "sdu_buffer_occupancy", "structrlc__am__entity__s.html#a4ea35b6315aea20b29c2def1afbdca57", null ],
      [ "retransmission_buffer_occupancy", "structrlc__am__entity__s.html#af8c8ec1557f0b2ec58ddafbcbdfdfd41", null ],
      [ "status_buffer_occupancy", "structrlc__am__entity__s.html#ad233a61cef8931e292e163ed4e656a3e", null ],
      [ "control_pdu_info", "structrlc__am__entity__s.html#aca0b67b067d747f3acb57216452af803", null ],
      [ "lock_input_sdus", "structrlc__am__entity__s.html#a6f80c5b4b8fa3335636cde7add17bd79", null ],
      [ "input_sdus", "structrlc__am__entity__s.html#a52ea68f3ff91e0c2e8b1ccaf1fbf7bba", null ],
      [ "nb_sdu", "structrlc__am__entity__s.html#a8f21fda906cc7613181e0fc04ac94c15", null ],
      [ "nb_sdu_no_segmented", "structrlc__am__entity__s.html#a6a11d125a24fa0a812e16b3ba4b5cc2e", null ],
      [ "next_sdu_index", "structrlc__am__entity__s.html#a870dba1c38cfbefe96293c007bfb10c0", null ],
      [ "current_sdu_index", "structrlc__am__entity__s.html#a0effc65f72170d281b5ebc38491bc77b", null ],
      [ "pdu_retrans_buffer", "structrlc__am__entity__s.html#ae697908ca0f3a5500397f88d01ab8405", null ],
      [ "retrans_num_pdus", "structrlc__am__entity__s.html#a58dd2358585fd27638664001e4e68bc6", null ],
      [ "retrans_num_bytes", "structrlc__am__entity__s.html#a91eda274225ed570d9473af1a606b4c9", null ],
      [ "retrans_num_bytes_to_retransmit", "structrlc__am__entity__s.html#a7bcd85f32524c43d5518339d0517ad4a", null ],
      [ "num_nack_so", "structrlc__am__entity__s.html#a577f49c78341226b5a712af978c5f2c5", null ],
      [ "num_nack_sn", "structrlc__am__entity__s.html#a97b8e49b734d6b713cf5d325ab15ec68", null ],
      [ "force_poll", "structrlc__am__entity__s.html#abfd725235e192d1355fde37ef43325d9", null ],
      [ "receiver_buffer", "structrlc__am__entity__s.html#a1cfc461bf34e42947925734ae708d4bb", null ],
      [ "output_sdu_in_construction", "structrlc__am__entity__s.html#a77f43e0c7b466c1a29be8c58a96af1bb", null ],
      [ "output_sdu_size_to_write", "structrlc__am__entity__s.html#a5dfe9de02a7ac3aecbca1d0f92a2e565", null ],
      [ "protocol_state", "structrlc__am__entity__s.html#aa38f4f40ad2462261974b88e9d3cfbe2", null ],
      [ "vt_a", "structrlc__am__entity__s.html#abf2bbc6d7b2f07c66cff11e6ae50105c", null ],
      [ "vt_ms", "structrlc__am__entity__s.html#aaedb6d531591081882cd91178966c060", null ],
      [ "vt_s", "structrlc__am__entity__s.html#a9273079b2fc491f07bc8413ba223c40f", null ],
      [ "poll_sn", "structrlc__am__entity__s.html#acb5efcf3fcee492ec074593cf9021ef5", null ],
      [ "vr_r", "structrlc__am__entity__s.html#a91404f488b2a91c9b2bcce692c71f0cc", null ],
      [ "vr_mr", "structrlc__am__entity__s.html#a4d61baff9117265e8951d5fd79ff9422", null ],
      [ "vr_x", "structrlc__am__entity__s.html#aa1f856307564112762a081881bb0f202", null ],
      [ "vr_ms", "structrlc__am__entity__s.html#ae34b2486b7395a3d3bcaa4820518a7ec", null ],
      [ "vr_h", "structrlc__am__entity__s.html#a66ba33201c98ba1c558540ea9fdd589d", null ],
      [ "t_poll_retransmit", "structrlc__am__entity__s.html#af48765321bc18879e24e6f64648d4c4b", null ],
      [ "t_reordering", "structrlc__am__entity__s.html#ac2f86142ce2c07f5a1073ede4f79e937", null ],
      [ "t_status_prohibit", "structrlc__am__entity__s.html#a417f28e82996e62bce04513794b4dc74", null ],
      [ "c_pdu_without_poll", "structrlc__am__entity__s.html#a3cbbdb2223d11b1ee96142bf77387666", null ],
      [ "c_byte_without_poll", "structrlc__am__entity__s.html#adbf7896b7d7d4f4a1500badd8b454178", null ],
      [ "max_retx_threshold", "structrlc__am__entity__s.html#ac048fa7d08a97e4dfb55b993928f47da", null ],
      [ "poll_pdu", "structrlc__am__entity__s.html#a169f2ce347329b20419739502dae247e", null ],
      [ "poll_byte", "structrlc__am__entity__s.html#ac8d72cdf45d6f47bd4f28e5666844312", null ],
      [ "stat_tx_pdcp_sdu", "structrlc__am__entity__s.html#a8891dc25a3fb7bdf725c3d08e90e0c2e", null ],
      [ "stat_tx_pdcp_bytes", "structrlc__am__entity__s.html#a340f43ee96b3f65cd585b6480023ab80", null ],
      [ "stat_tx_pdcp_sdu_discarded", "structrlc__am__entity__s.html#a79f5478e70743c6e10be94ae84b2b880", null ],
      [ "stat_tx_pdcp_bytes_discarded", "structrlc__am__entity__s.html#a182b86bf6f7f96b1d201686b17a8cfeb", null ],
      [ "stat_tx_data_pdu", "structrlc__am__entity__s.html#af5d6e89012fdf810f769c2c915222ad6", null ],
      [ "stat_tx_data_bytes", "structrlc__am__entity__s.html#aa955f7bb13a8aa992ae28d409826f5b1", null ],
      [ "stat_tx_retransmit_pdu_by_status", "structrlc__am__entity__s.html#aca103584c63da89710dbe064a2db27ef", null ],
      [ "stat_tx_retransmit_bytes_by_status", "structrlc__am__entity__s.html#a0590580831fb071110bfbc9a1af5d169", null ],
      [ "stat_tx_retransmit_pdu", "structrlc__am__entity__s.html#af15482512e88d53f0cd1c3a5cd2a2622", null ],
      [ "stat_tx_retransmit_bytes", "structrlc__am__entity__s.html#a72348b9976283cb30ca9be85f8377bd0", null ],
      [ "stat_tx_control_pdu", "structrlc__am__entity__s.html#aa5433c297c19db5aadaf594f4a62088e", null ],
      [ "stat_tx_control_bytes", "structrlc__am__entity__s.html#af0399bc6a97d2e683c6c6eaa71c693f8", null ],
      [ "stat_rx_pdcp_sdu", "structrlc__am__entity__s.html#ad5633aaf0ecec9d8aab04a4a5a2d39b8", null ],
      [ "stat_rx_pdcp_bytes", "structrlc__am__entity__s.html#af372f94d4d37dc6b1d53a8a59db38558", null ],
      [ "stat_rx_data_pdus_duplicate", "structrlc__am__entity__s.html#ab92dd8fd52a63631fc703d42817b9b94", null ],
      [ "stat_rx_data_bytes_duplicate", "structrlc__am__entity__s.html#a964b6be45bbb563944774237e29b4849", null ],
      [ "stat_rx_data_pdu", "structrlc__am__entity__s.html#a21c692b392c5f9f501637c4df6ed8da8", null ],
      [ "stat_rx_data_bytes", "structrlc__am__entity__s.html#aaf3144dd00b559c0173c9079b50253f2", null ],
      [ "stat_rx_data_pdu_dropped", "structrlc__am__entity__s.html#a343952b25990fba9d76523358dcdd7e1", null ],
      [ "stat_rx_data_bytes_dropped", "structrlc__am__entity__s.html#a8f2eac245002e87d27976d0beac3042e", null ],
      [ "stat_rx_data_pdu_out_of_window", "structrlc__am__entity__s.html#a7f92d67fc4b35e257e981f95ff9f93a7", null ],
      [ "stat_rx_data_bytes_out_of_window", "structrlc__am__entity__s.html#a423e7e43edcabc3deac5ca78e27b4d8e", null ],
      [ "stat_rx_control_pdu", "structrlc__am__entity__s.html#a0ac49b096713f0b32e3fcf7c9f98dd25", null ],
      [ "stat_rx_control_bytes", "structrlc__am__entity__s.html#aa9c9c51720a349100cd32bd71b8e9aca", null ],
      [ "stat_timer_reordering_timed_out", "structrlc__am__entity__s.html#ab7c953621cd4a85f3ff937a1d3bf9102", null ],
      [ "stat_timer_poll_retransmit_timed_out", "structrlc__am__entity__s.html#ad2692f1bbfdf125fe7a3725a5b8c5b16", null ],
      [ "stat_timer_status_prohibit_timed_out", "structrlc__am__entity__s.html#af8099e3151fa1bf036c948759d93dc34", null ],
      [ "nb_bytes_requested_by_mac", "structrlc__am__entity__s.html#ae695954129ada12dcb4cfd7ef8dd3d6e", null ],
      [ "pdus_to_mac_layer", "structrlc__am__entity__s.html#a77883cacfc46e7388585e3c9fec6ba23", null ],
      [ "control_pdu_list", "structrlc__am__entity__s.html#abb25f9806cbbb1eae18d733a83448241", null ],
      [ "first_retrans_pdu_sn", "structrlc__am__entity__s.html#aa0fcb0176dd77ad4693325587f821ce4", null ],
      [ "segmentation_pdu_list", "structrlc__am__entity__s.html#a1da128e647ae0c7b2103c68142617841", null ],
      [ "status_requested", "structrlc__am__entity__s.html#aec849c81a332ec0b78763d08dccbc898", null ],
      [ "last_frame_status_indication", "structrlc__am__entity__s.html#aa9900e234810dfb0cc47e3141837d5c0", null ],
      [ "buffer_occupancy_retransmission_buffer", "structrlc__am__entity__s.html#ae8dbdcac381212415b4a1c925aa40ae1", null ],
      [ "initialized", "structrlc__am__entity__s.html#aa90b332268bb1002f9e298364c165a02", null ],
      [ "configured", "structrlc__am__entity__s.html#ac28acf5b5c07ec9ac90d22382d9e717c", null ]
    ] ],
    [ "rlc_am_pdu_sn_10_t", "structrlc__am__pdu__sn__10__t.html", null ],
    [ "rlc_am_entity_t", "structrlc__am__entity__t.html", null ],
    [ "RLC_AM_SN_MODULO", "group____rlc__am__internal__impl__.html#gaf5df3e8dac810387a224163a8a2770e4", null ],
    [ "RLC_AM_SN_MASK", "group____rlc__am__internal__impl__.html#ga4d8ba07df4c72d6a3c937d2d50878dab", null ],
    [ "RLC_AM_WINDOW_SIZE", "group____rlc__am__internal__impl__.html#ga4f71e6c13138994aca3f44dbe44c9009", null ],
    [ "RLC_AM_SDU_DATA_BUFFER_SIZE", "group____rlc__am__internal__impl__.html#gaecc6a0c8f6fbb8b1e34071bde7f82d8a", null ],
    [ "RLC_AM_SDU_CONTROL_BUFFER_SIZE", "group____rlc__am__internal__impl__.html#gaf04226bd40dcbf8b075736f3d548afb4", null ],
    [ "RLC_AM_PDU_RETRANSMISSION_BUFFER_SIZE", "group____rlc__am__internal__impl__.html#ga46346aeb63c4cfeda5fa2cf9fa8dcc10", null ],
    [ "RLC_AM_HEADER_MIN_SIZE", "group____rlc__am__internal__impl__.html#ga3e182196675af35bf6834e0c19624ff4", null ],
    [ "RLC_AM_MIN_SEGMENT_SIZE_REQUEST", "group____rlc__am__internal__impl__.html#ga02be083db3bf1e7fd9dc57240cfd77b9", null ],
    [ "RLC_AM_MAX_SDU_IN_PDU", "group____rlc__am__internal__impl__.html#gae0f9aec17c7d8c8f446250bca8272fa6", null ],
    [ "RLC_AM_MAX_SDU_FRAGMENTS", "group____rlc__am__internal__impl__.html#gaf727b42878a100fb4b570b6ed8bec501", null ],
    [ "RLC_AM_MAX_NACK_IN_STATUS_PDU", "group____rlc__am__internal__impl__.html#ga791b927e613ff4db7d698307794065ad", null ],
    [ "RLC_AM_MAX_HOLES_REPORT_PER_PDU", "group____rlc__am__internal__impl__.html#ga1eca38454377205e3790db353e4939c8", null ],
    [ "rlc_am_pdu_sn_10_t", "group____rlc__am__internal__impl__.html#ga1106b84c02d9d1969c78ab8208bb3c30", null ],
    [ "rlc_am_entity_t", "group____rlc__am__internal__impl__.html#gaee1a5f1e993eaff1ffbcc00a326aeeec", null ]
];