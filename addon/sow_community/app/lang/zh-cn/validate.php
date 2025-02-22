<?php

return [
    'common_validate' => [
        'category_name_unique' => '分类名称必须是唯一的',
        'topic_name_unique' => '话题名称必须是唯一的',
    ],
    //内容
    'validate_content' => [
        'content_image_or_video_required' => '请上传图片或视频',
        'category_id_require' => '请选择社区分类',
        'cannot_contain_sensitive' => '发布内容中包含敏感词汇',
    ],
    //评论
    'validate_comment' => [
        'cannot_contain_sensitive' => '发布评论中包含敏感词汇',
    ],
];
