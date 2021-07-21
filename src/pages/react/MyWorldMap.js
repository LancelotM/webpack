import React from 'react';


export default React.forwardRef((props,ref) => {
    const [num,setNum] = React.useState(0);
    const mapRef = React.useRef(null);
    React.useImperativeHandle(ref, () => {
        return {
            //暴露 num 属性
            num:num
        }
    })

    React.useEffect(()=>{
        for (let index = 0; index < 10; index++) {
            setNum(index)
        }
    },[])

    //你的return内容，注意ref
    return(
        <React.Fragment>
            <div id={"myWorldMap"} ref={mapRef}></div>
        </React.Fragment>
    )
})