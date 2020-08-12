var categories = function () {
    let $catGrid = $('.categories-block__grid');
    let $moreCats = $(".categories-block__more");

    if ($catGrid) {
        $catGrid.click((e) => {
            let $target = e.target;
            let $showAllBtn = $($target).closest(".categories-block__show-all");

            if($showAllBtn){
                $($showAllBtn).toggleClass(`active`)
                let text = $($showAllBtn).hasClass("active") ? "Закрыть подкатегории": "Все подкатегории";
                $($showAllBtn).siblings(".categories-block__subcats-list").toggleClass("categories-block__subcats-list_short")
                $($showAllBtn).text(text)
            }
        })
        $moreCats.click((e)=>{
            $moreCats.toggleClass("active");
            let text = $($moreCats).hasClass("active") ? "СКРЫТЬ КАТЕГОРИИ": "ЕЩЁ КАТЕГОРИИ";
            $moreCats.text(text)
            $catGrid.toggleClass("categories-block__grid_short");
        })
    }
};

module.exports = {
    categories: categories
};