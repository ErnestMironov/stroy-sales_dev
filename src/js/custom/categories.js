
export default function () {
    let $catGrid = $('.categories-block__grid');
    let $moreCats = $(".categories-block__more");
    let cat = ".categories-block__cat-name";
    let subcat = ".categories-block__subcat";
    let $form = $(".form__wrapper_cat")

    if ($catGrid) {
        const pcLimit = 9,
            tablLimit = 6,
            mobLimit = 3,
            itemsQuant = document.querySelectorAll(`.categories-block__grid .categories-block__grid-item`)

        function hideBtn(limit) {
            if (itemsQuant.length > limit) {
                $moreCats.css(`display`, `block`)
            }
        }

        if (screen.width > 1024) {
            hideBtn(pcLimit)
        } else if (screen.width < 1024) {
            hideBtn(tablLimit)
        } else if (screen.width < 648) {
            hideBtn(mobLimit)
        }

        $catGrid.click((e) => {
            let $target = e.target;
            let $showAllBtn = $($target).closest(".categories-block__show-all");

            if ($showAllBtn) {
                $($showAllBtn).toggleClass(`active`)
                let text = $($showAllBtn).hasClass("active") ? "Закрыть подкатегории" : "Все подкатегории";
                $($showAllBtn).siblings(".categories-block__subcats-list").toggleClass("categories-block__subcats-list_short")
                $($showAllBtn).text(text)
            }
        })
        $moreCats.click((e) => {
            $moreCats.toggleClass("active");
            let text = $($moreCats).hasClass("active") ? "СКРЫТЬ КАТЕГОРИИ" : "ЕЩЁ КАТЕГОРИИ";
            $moreCats.text(text)
            $catGrid.toggleClass("categories-block__grid_short");
        })
    }

    function pastContent(target) {
        let categories = $(target).closest(".categories-block__grid-item");
        let title = $(categories).find("h2").text()
        let icon = $(categories).find(".categories-block__cat-icon").html()

        $form.find(".form__cat-title").text(title)
        $form.find(".form__cat-icon").html(icon)
        $form.addClass("show")
    }

    $(`body`).on('click', cat, (e) => {
        pastContent(e.target)
        $form.find(".form__subcat").hide()
    })

    $(`body`).on('click', subcat, (e) => {
        pastContent(e.target);
        console.log(e.target)
        let subCat = $(e.target).closest(subcat).find("a").text();
        $form.find(".form__subcat").show().text(subCat);
    })
};
