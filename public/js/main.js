// jQuery 2.0 script
//

$(function() { // このスクリプトロード時に処理する
    $('.add-star').click(function() { // クラスadd-star部分をクリックしたときの処理の定義
        var $this = $(this); // DOMにおこるthisをもとにjQueryのオブジェクトのインスタンスを生成し、それを$thisに代入している。
        var post_id = $this.attr('data-post-id'); // $thisがもっているアトリビュートdata-post-idを取得し、変数post_idに入れる
        $.ajax({ // AJAXの処理: 非同期通信
            // URLを生成
            // dataType, 成功時と失敗時の処理を指定
            url: '/star?post_id=' + post_id,
            dataType: 'json', // JSONでデータを受け取る
            success: function(data) { // dataはJSONで受け取ったデータ
                $this.text(data['star_count']); // このオブジェクトのtextを書き換える（HTML側の<span></span>で指定した部分のテキスト）
            },
            error: function(data) {
                alert('失敗しました');
            }
        });
    });
});
