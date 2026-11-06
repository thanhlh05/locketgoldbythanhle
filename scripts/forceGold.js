var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
  obj.entries = obj.entries || {};

  // Feature gates cơ bản
  Object.assign(obj.entries, {
    feature_gates: JSON.stringify({
      camera_roll: "enabled",
      longer_video: "enabled",
      unlimited_friends: "enabled",
      locket_views: "enabled",
      long_captions: "enabled",
      remove_ads: "enabled",
      video: "enabled",
      custom_widget_frames: "enabled",
      streak_recovery: "enabled"
    }),
    profile_badge_visible: "true",          // không cần badge
    android_subscribe_gold_button_enabled: "false"
  });

  // Camera + 60s + mic + upload video
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
    // Tắt filter
    camera_filter_config: JSON.stringify({
      allows_custom_filters: false,
      show_filter_button: false,
      sheet_enabled: false,
      open_sheet_immediately: false,
      sheet_filters: [],
      picker_filters: []
    })
  });

  // Bạn bè
  Object.assign(obj.entries, {
    max_friends_count: "999999",
    friend_limit_mode: "0",
    soft_friend_limit_threshold_count: "999999"
  });

  // Moments / Streak / Chat
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

  // Widget + Journal
  Object.assign(obj.entries, {
    widget_badge_enabled: "true",
    widget_badge_v2: "true",
    activity_bar_enabled: "true",
    journal_activity_bar_enabled: "true"
  });

    // ============================================================
    // OVERLAY & CUSTOM CAPTIONS (hỗ trợ tự viết + chỉnh màu/icon)
    // ============================================================
    Object.assign(obj.entries, {
    captions_enabled: "true",
    music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({
        suggestions_enabled: true
    }),

    // Cho phép dùng caption kiểu custom (người dùng tự viết + chỉnh)
    overlay_dynamic_captions: JSON.stringify([
        "standard",
        "custom",          // quan trọng - cho phép tự viết
        "music",
        "location",
        "weather",
        "time",
        "streak",
        "poll",
        "color_palette"
    ]),

    // Một số caption mẫu đẹp để gợi ý (người dùng vẫn có thể tự viết)
    overlay_items: JSON.stringify([
        {
        section: "Gợi ý",
        items: [
            {
            overlay_id: "caption:standard",
            source: "local",
            caption: {
                type: "standard"
            }
            },
            {
            overlay_id: "caption:custom",
            source: "local",
            caption: {
                type: "custom",
                max_lines: 2,
                text_color: "#FFFFFFE6",
                background: {
                colors: ["#00000099", "#00000066"]
                }
            }
            }
        ]
        },
        {
        section: "Vibe",
        items: [
            {
            overlay_id: "caption:chilling",
            source: "remote",
            caption: {
                type: "static_content",
                text: "Chilling ✨",
                max_lines: 1,
                text_color: "#FFFFFF",
                background: { colors: ["#667eea", "#764ba2"] },
                icon: { type: "emoji", data: "🌴" }
            }
            },
            {
            overlay_id: "caption:night",
            source: "remote",
            caption: {
                type: "static_content",
                text: "Night vibes",
                max_lines: 1,
                text_color: "#FFFFFF",
                background: { colors: ["#0f0c29", "#302b63", "#24243e"] },
                icon: { type: "emoji", data: "🌙" }
            }
            },
            {
            overlay_id: "caption:miss_you",
            source: "remote",
            caption: {
                type: "static_content",
                text: "Miss you",
                max_lines: 1,
                text_color: "#FFFFFF",
                background: { colors: ["#ff9a9e", "#fad0c4"] },
                icon: { type: "emoji", data: "🥺" }
            }
            }
        ]
        }
    ])
    });
}

$done({ body: JSON.stringify(obj) });