addScript();

function addScript() {
    const url = 'http://localhost:35729/livereload.js';
    document.write("<script language=javascript src=" + url + "></script>");
}

$(function () {
    // header 頭像
    document.addEventListener('click', function () {
        document.querySelector('.member').classList.remove('active')
    })
    document.querySelector('.member').addEventListener('click', function (event) {
        event.stopPropagation();
        const isActive = event.currentTarget.classList.value;
        if (isActive === 'member') {
            document.querySelector('.member').classList.add('active')
        }
    })

    // 會員查詢
    const memberSearch = document.querySelector('.member_search');
    if (memberSearch) {
        document.addEventListener('click', function () {
            memberSearch.classList.remove('active');
        })
        memberSearch.addEventListener('click', function (event) {
            event.stopPropagation();
            const isActive = event.currentTarget.classList.value;
            if (isActive === 'member_search') {
                document.querySelector('.member_search').classList.add('active');
            }
        })
    }

    const option = document.querySelectorAll('.member_search .option li');
    option.forEach(li => {
        li.addEventListener('click', function (event) {
            event.stopPropagation();
            const selected = document.querySelector('.member_option_selected');
            selected.innerHTML = li.innerHTML;
            document.querySelector('.member_search').classList.remove('active');
        })
    })

});
