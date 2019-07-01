const init = require('../model/init')

init.deleteMany({ title: 'Express' }, function () {
    console.log('删除了')
})

module.exports = function initPage() {
    let initVar = new init({
        init_id: 0,
        title: 'Express',
        nav: [
            {
                title: 'nav1',
                subnav: {
                    title: 'subnav1'
                }
            },
            {
                title: 'nav2',
                subnav: {
                    title: 'subnav2'
                }
            },
            {
                title: 'nav3',
                subnav: {
                    title: 'subnav3'
                }
            },
            {
                title: 'nav4',
                subnav: {
                    title: 'subnav4'
                }
            },
            {
                title: 'nav5',
            },
            {
                title: 'nav6',
            },
        ],
        bannerText: [
            'bannerText1',
            'bannerText2'
        ]
    })
    initVar.save(function(){
        console.log('添加成功！')
    })
}




