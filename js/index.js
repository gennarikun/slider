// スライダー初期化(Swiper v8.4.7)
const swiper = new Swiper('.slider-container', {
  loop: true,
  speed: 500,
  slidesPerView: 1, //spでは1枚表示
  allowTouchMove: true, //ドラッグ（スワイプ）でのスライド切り替えを有効
  pagination: {
    el: '.swiper-pagination',
    clickable: true, //paginationクリックでのスライド切り替えを有効
  },
  autoplay: {
    delay: 3000, //3秒毎に自動再生
    waitForTransition: true, //アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    900: {
      slidesPerView: 1.5, //表示させるスライドの枚数を指定 CSSでサイズ調整したい場合は ‘auto’ を指定
      centeredSlides: true, //アクティブなスライドが中央に来るようにする
    }
  }
});

// ページネーション、next/prevボタンがクリックされたときにautoplayを停止する
swiper.on('click', '.swiper-pagination, .swiper-button-next, .swiper-button-prev', function() {
  if (swiper.autoplay.running) {
    swiper.autoplay.stop();
  }
});

// スライドが切り替わるときにautoplayを再開する
swiper.on('slideChangeTransitionEnd', function() {
  if (!swiper.autoplay.running) {
    swiper.autoplay.start();
  }
});

// マウスがスライダーに乗ったらautoplayを停止する
swiper.el.addEventListener('mouseenter', function() {
  swiper.autoplay.stop();
});

// マウスがスライダーから離れたらautoplayを再開する
swiper.el.addEventListener('mouseleave', function() {
  swiper.autoplay.start();
});
