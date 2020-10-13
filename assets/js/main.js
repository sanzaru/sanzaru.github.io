(function () {
    try {
        const dateYearNode = document.querySelector('.date-year')
        if (dateYearNode) { dateYearNode.textContent = String((new Date()).getFullYear()) }

        $('.icon-links a').tooltip({ placement: 'bottom', boundary: 'viewport' })
    } catch { }
})()