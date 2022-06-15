wp.blocks.registerBlockType("dkasa/block-1",{
    title: "Bloque 11",
    icon: "smiley",
    category: "custom-layout-category",
    attributes:{
        skyColor: {type: "string"},
        grassColor: {type: "string"}
    },
    edit: function (props) {
        function updateSkyColor(event){
            props.setAttributes({skyColor:event.target.value})
        }
        function updateGrassColor(event){
            props.setAttributes({grassColor:event.target.value})
        }
        return (
            <div>
                <input type="text" placeholder="sky color" value={props.attributes.skyColor} onChange={updateSkyColor}/>
                <input type="text" placeholder="grass color" value={props.attributes.grassColor} onChange={updateGrassColor}/>
            </div>
        )
    },
    save: function () {
        return  null
    }
});