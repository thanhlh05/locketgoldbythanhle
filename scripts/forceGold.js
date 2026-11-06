var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
  obj.entries = obj.entries || {};

  // ============================================================
  // 1. FEATURE GATES + PAYWALL
  // ============================================================
  Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
      app_icon_picker: "enabled",
      camera_roll: "enabled",
      camera_theme: "enabled",
      locket_views: "enabled",
      long_captions: "enabled",
      longer_video: "enabled",
      unlimited_friends: "enabled",
      priority_support: "enabled",
      profile_badge: "enabled",
      remove_ads: "enabled",
      video: "enabled",
      custom_widget_frames: "enabled",
      streak_recovery: "enabled"
    }),
    profile_badge_visible: "true",
    android_subscribe_gold_button_enabled: "false",
    paywall_presentation_config: JSON.stringify({
      uid: "paywall_testflight",
      onboarding: false,
      after_sent_moment: false,
      on_foreground: false,
      interval: 999999999,
      profile_banner: false
    })
  });

  // ============================================================
  // 2. CAMERA + 60s + MIC + UPLOAD VIDEO + THEME
  // ============================================================
  Object.assign(obj.entries, {
    camera: JSON.stringify({
      gold_max_duration: 60.0,
      goldMaxDuration: 60.0,
      max_duration: 60.0,
      maxDuration: 60.0,
      volume_button: true,
      flash_button: true
    }),
    camera_roll: JSON.stringify({
      gold_max_duration: 60.0,
      goldMaxDuration: 60.0,
      video_max_duration: 60.0,
      videoMaxDuration: 60.0,
      max_duration: 60.0,
      maxDuration: 60.0,
      trim_max_duration: 60.0,
      camera_roll_max_duration: 60.0
    }),
    camera_roll_video_enabled: "true",
    camera_roll_video_upload_enabled: "true",
    internal_camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_video_max_duration: "60.0",
    max_video_duration: "60.0",
    video_max_duration: "60.0",
    gold_max_duration: "60.0",
    video_sound_enabled: "true",
    microphone_enabled: "true",
    camera_microphone_enabled: "true",
    camera_theme_enabled: "true",
    camera_themes_enabled: "true",
    long_captions_enabled: "true",
    captions_max_length: "500",
    camera_filter_config: JSON.stringify({
      allows_custom_filters: false,
      show_filter_button: false,
      sheet_enabled: false,
      open_sheet_immediately: false,
      sheet_filters: [],
      picker_filters: []
    })
  });

  // ============================================================
  // 3. BẠN BÈ
  // ============================================================
  Object.assign(obj.entries, {
    max_friends_count: "999999",
    friend_limit_mode: "0",
    soft_friend_limit_threshold_count: "999999"
  });

  // ============================================================
  // 4. MOMENTS / STREAK / CHAT
  // ============================================================
  Object.assign(obj.entries, {
    moment_views_enabled: "true",
    moment_views_v2: "true",
    record_moment_views: "true",
    notify_moment_views: "true",
    moment_reactions_v2: "true",
    chat_reactions_enabled: "true",
    conversations_enabled: "true",
    unsend_message_enabled: "true",
    typing_indicators_enabled: "true"
  });

  // ============================================================
  // 5. WIDGET + JOURNAL
  // ============================================================
  Object.assign(obj.entries, {
    widget_badge_enabled: "true",
    widget_badge_v2: "true",
    activity_bar_enabled: "true",
    journal_activity_bar_enabled: "true"
  });

  // ============================================================
  // 6. OVERLAY & CUSTOM CAPTIONS
  // ============================================================
  Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true",
    music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify([
      "standard", "poll", "color_palette", "review", "music", "location",
      "weather", "time", "streak", "star_sign", "party_time", "locket_count",
      "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
    ]),
    overlay_items: JSON.stringify([
      // General
      {
        section: "General",
        items: [
          { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
          { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
          { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
          { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
          { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
          { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
          { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
          { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
          { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
          { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
          { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } },
          { overlay_id: "caption:custom", source: "local", caption: { type: "custom", max_lines: 3 } }
        ]
      },
      // Holiday
      {
        section: "Holiday Caption",
        items: [
          { overlay_id: "caption:good_morning", source: "remote", daily_start_hour: 5, daily_end_hour: 10, caption: { background: { colors: ["#EF7402", "#EABF0F"] }, icon: { data: "☀️", type: "emoji" }, max_lines: 1, text: "Good morning", text_color: "#FFFFFFE5", type: "static_content" } },
          { overlay_id: "caption:coffee_time", source: "remote", caption: { background: { colors: ["#4E342E", "#8D6E63"] }, icon: { data: "☕", type: "emoji" }, max_lines: 1, text: "Coffee Time!", text_color: "#FFFFFFE6", type: "static_content" } },
          { overlay_id: "caption:party_time", source: "remote", caption: { background: { colors: ["#5EFFF5", "#FCFF57"] }, icon: { data: "🪩", type: "emoji" }, max_lines: 1, text: "Party Time!", text_color: "#000000E6", type: "static_content" } },
          { overlay_id: "caption:ootd", source: "remote", caption: { background: { colors: ["#FFFFFF", "#DBDBDB"] }, icon: { data: "🕶", type: "emoji" }, max_lines: 1, text: "OOTD", text_color: "#101010E6", type: "static_content" } },
          { overlay_id: "caption:goodnight", source: "remote", daily_start_hour: 21, daily_end_hour: 24, caption: { background: { colors: ["#370C6F", "#575CD4"] }, icon: { data: "🌙", type: "emoji" }, max_lines: 1, text: "Goodnight", text_color: "#FFFFFFE6", type: "static_content" } },
          { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, icon: { data: "🎃", type: "emoji" }, max_lines: 1, text: "Halloween", text_color: "#FFB182", type: "static_content" } },
          { overlay_id: "caption:christmas_day_2026", source: "remote", caption: { background: { colors: ["#E53935", "#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:new_years_eve_2026", source: "remote", caption: { background: { colors: ["#FFC64B", "#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", text_color: "#643F00", type: "static_content" } }
        ]
      },
      // Decorative
      {
        section: "🎨 Decorative by ThanhLe",
        items: [
          { overlay_id: "caption:snvv", source: "local", caption: { background: { colors: ["#FFFFFF", "#800020"] }, max_lines: 1, text: "Happy Birthday 🎂", text_color: "#183153", type: "static_content" } },
          { overlay_id: "caption:tuat", source: "remote", caption: { background: { colors: ["#2C1A0E", "#5D4037", "#D7A86E"] }, icon: { data: "🐕", type: "emoji" }, max_lines: 1, text: "Tuất", text_color: "#FFFFFFE6", type: "static_content" } },
          { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "👻", type: "emoji" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } }
        ]
      },
      // Ăn uống
      {
        section: "🍜 Ăn uống",
        items: [
          { overlay_id: "caption:an_ngon", source: "remote", caption: { type: "static_content", text: "Ăn ngon!", max_lines: 1, text_color: "#FFFFFF", background: { colors: ["#FF6B6B", "#FF8E53"] }, icon: { type: "emoji", data: "😋" } } },
          { overlay_id: "caption:doi_qua", source: "remote", caption: { type: "static_content", text: "Đói quá trời ơi", max_lines: 1, text_color: "#FFFFFF", background: { colors: ["#FF9A9E", "#FAD0C4"] }, icon: { type: "emoji", data: "🥺" } } },
          { overlay_id: "caption:hom_nay_an_gi", source: "remote", caption: { type: "static_content", text: "Hôm nay ăn gì đây?", max_lines: 1, text_color: "#FFFFFF", background: { colors: ["#F7971E", "#FFD200"] }, icon: { type: "emoji", data: "🤔" } } },
          { overlay_id: "caption:tra_sua_time", source: "remote", caption: { type: "static_content", text: "Trà sữa time 🧋", max_lines: 1, text_color: "#5D4037", background: { colors: ["#FFE0B2", "#FFCC80"] }, icon: { type: "emoji", data: "🧋" } } },
          { overlay_id: "caption:an_no_roi", source: "remote", caption: { type: "static_content", text: "Ăn no rồi nha", max_lines: 1, text_color: "#FFFFFF", background: { colors: ["#43A047", "#66BB6A"] }, icon: { type: "emoji", data: "😌" } } },
          { overlay_id: "caption:thich_an", source: "remote", caption: { type: "static_content", text: "Chỉ thích ăn thôi", max_lines: 1, text_color: "#FFFFFF", background: { colors: ["#EC407A", "#F48FB1"] }, icon: { type: "emoji", data: "🍜" } } },
          { overlay_id: "caption:do_an_ngon", source: "remote", caption: { type: "static_content", text: "Đồ ăn ngon nhất", max_lines: 1, text_color: "#FFFFFF", background: { colors: ["#FF7043", "#FFAB91"] }, icon: { type: "emoji", data: "🔥" } } },
          { overlay_id: "caption:an_uong_vui_ve", source: "remote", caption: { type: "static_content", text: "Ăn uống vui vẻ", max_lines: 1, text_color: "#FFFFFF", background: { colors: ["#26A69A", "#4DB6AC"] }, icon: { type: "emoji", data: "🥳" } } }
        ]
      },
      // 💕 (đã chỉnh bớt sến)
      {
        section: "💕",
        items: [
          { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "💬", type: "emoji" }, max_lines: 1, text: "Nhớ bạn", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:dang_nghi_ve_ban", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💭", type: "emoji" }, max_lines: 1, text: "Đang nghĩ về bạn", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:thich_ban", source: "remote", caption: { background: { colors: ["#EE9CA7", "#FFDDE1"] }, icon: { data: "🙂", type: "emoji" }, max_lines: 1, text: "Thích bạn", text_color: "#000000E6", type: "static_content" } },
          { overlay_id: "caption:hom_nay_cute", source: "remote", caption: { background: { colors: ["#F8BBD0", "#E91E63"] }, icon: { data: "✨", type: "emoji" }, max_lines: 1, text: "Hôm nay cũng ổn", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:nho_roi", source: "remote", caption: { background: { colors: ["#FF6B6B", "#FF8E8E"] }, icon: { data: "📌", type: "emoji" }, max_lines: 1, text: "Nhớ rồi đó", text_color: "#FFFFFF", type: "static_content" } }
        ]
      },
      // Gen Z (đã chỉnh)
      {
        section: "🎨 Gen Z",
        items: [
          { overlay_id: "caption:cute", source: "remote", caption: { background: { colors: ["#FFDEE9", "#FFB6C1"] }, icon: { data: "😌", type: "emoji" }, max_lines: 1, text: "Cute một chút", text_color: "#333333", type: "static_content" } },
          { overlay_id: "caption:xinh_the", source: "remote", caption: { background: { colors: ["#FC5C7D", "#6A82FB"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Xinh thế nhờ", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:dep_trai", source: "remote", caption: { background: { colors: ["#FF5722", "#FFC107"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Đẹp trai thật", text_color: "#000000", type: "static_content" } },
          { overlay_id: "caption:ok_luon", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "👍", type: "emoji" }, max_lines: 1, text: "Ok luôn", text_color: "#333333", type: "static_content" } },
          { overlay_id: "caption:chill", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB"] }, icon: { data: "🌴", type: "emoji" }, max_lines: 1, text: "Chill thôi", text_color: "#FFFFFF", type: "static_content" } },
          { overlay_id: "caption:hom_nay_vui", source: "remote", caption: { background: { colors: ["#84FAB0", "#8FD3F4"] }, icon: { data: "😄", type: "emoji" }, max_lines: 1, text: "Hôm nay vui", text_color: "#000000", type: "static_content" } }
        ]
      },
      // Meme
      {
        section: "🎨 Meme",
        items: [
          { overlay_id: "caption:hong_drama", source: "remote", caption: { background: { colors: ["#8A2387", "#E94057", "#F27121"] }, icon: { data: "🍿", type: "emoji" }, max_lines: 1, text: "Hóng drama", text_color: "#FFFFFFE6", type: "static_content" } },
          { overlay_id: "caption:co_bien_co_bien", source: "remote", caption: { background: { colors: ["#FF512F", "#F09819", "#FFD200"] }, icon: { data: "🚨", type: "emoji" }, max_lines: 1, text: "Có biến có biến", text_color: "#FFFFFFE6", type: "static_content" } },
          { overlay_id: "caption:ai_muon", source: "remote", caption: { background: { colors: ["#C5C9E8", "#DFD1F0", "#F0D1DB"] }, icon: { data: "🤨", type: "emoji" }, max_lines: 1, text: "ủa rồi ai mượn?", text_color: "#49435E", type: "static_content" } }
        ]
      }
    ])
  });
}

$done({ body: JSON.stringify(obj) });