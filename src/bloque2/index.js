wp.blocks.registerBlockType("dkasa/block-2",{
    title: "Bloque 2",
    icon: "awards",
    category: "custom-layout-category",
    edit: function () {
        return (
            <div>
                <p>Hello bloque2</p>
                <p>Hello paragraph 2</p>
            </div>
        )
    },
    save: function () {
        return (
            <>
            <h3>bloque2</h3>
            <h4>dsadsa</h4>
            </>
        )
    }
});