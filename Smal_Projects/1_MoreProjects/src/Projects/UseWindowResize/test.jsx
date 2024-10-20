import UseWindowResize from "."


export default function UseWindowResizeHook(){
    const windowSize  = UseWindowResize();
    const {width, height} = windowSize
    console.log(window)
    return( 
        <div>
            <h1>UseWindowResizeHook</h1>
            <p>width is {width}</p>
            <p>height is {height}</p>

        </div>
    )
}