import router from "./router";

const menuData = router.routes.map(item=>{
    const {component,meta,path,icon} = item;
    return {
        icon,
        path,
        name:meta.name,
        subTitle:meta.subTitle
    }
})

console.log(menuData)

export default menuData;
