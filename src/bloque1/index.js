wp.blocks.registerBlockType("dkasa/block-1",{
    title: "Bloque 1",
    icon: "smiley",
    category: "custom-layout-category",
    edit: function () {
        return (
            <div>
                <p>Hello bloque 1</p>
                <p>Hello paragraph 2</p>
            </div>
        )
    },
    save: function () {
        return (
            <>
            <h3>bloque1</h3>
            <h4>dsadsa</h4>
            </>
        )
    }
});