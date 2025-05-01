
$(function () {
  // ヘッダーの高さ分だけコンテンツを下げる
  const height = $(".js-header").height();
  $("main").css("margin-top", height);

  // ヘッダーの高さ取得
  const headerHeight = $(".js-header").height();
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    // ヘッダーの高さ分下げる
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  // ハンバーガーアイコンで開閉
  $(".js-hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  // ドロワー内のリンクをクリックしたら閉じる
  $(".drawer-menu__link, .drawer-menu__contact").click(function () {
    $(".js-hamburger").removeClass("is-active");
    $(".js-drawer").fadeOut();
  });

  // ドロワーの背景部分（中身以外）をクリックしたら閉じる
  $(".js-drawer").click(function () {
    $(".js-hamburger").removeClass("is-active");
    $(this).fadeOut();
  });
});
