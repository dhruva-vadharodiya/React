function printHello(event){
    console.log("hello!");
    console.log(event);

}
export default function Button(){
    return (
        <div>
            <button onClick={printHello}>click me</button>
        </div>
    )
}

