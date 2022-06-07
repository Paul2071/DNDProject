function Heading () {

const whenClicked = function () {
   
        console.log("YOYO")
    
    }
    


    return (
<nav className="main-title">
    <h1>DND Item Generator</h1>
    <div className="explanation">
        <p>Click the button to generate an item</p>
    </div>
    <button className="item-button" onClick={whenClicked}>Item Type</button>
    <button className="name-button" onClick={whenClicked}>Item Name</button>
    <button className="dmg-button" onClick={whenClicked}>Damage Type</button> 
</nav>
    );
}

export default Heading;