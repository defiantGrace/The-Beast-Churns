ServerEvents.recipes(event => {

//remove relevant recipes
    event.remove({ output: 'superbwarfare:sentinel' })
    event.remove({ output: 'superbwarfare:devotion' })
    event.remove({ output: 'superbwarfare:aurelia_sceptre' })
    event.remove({ output: 'superbwarfare:secondary_cataclysm' })
    event.remove({ id: 'superbwarfare:annihilator_crafting' })
    event.remove({ id: 'superbwarfare:prism_tank_crafting' })
    event.remove({ id: 'superbwarfare:yx_100_crafting' })
    event.remove({ output: 'superbwarfare:rare_material_pack' })
    event.remove({ output: 'superbwarfare:epic_material_pack' })
    event.remove({ output: 'superbwarfare:legendary_material_pack' })
    event.remove({ output: "#superbwarfare:blueprint" })
//add material packs

    event.shapeless(
        Item.of('superbwarfare:rare_material_pack', 1),
        [
            'superbwarfare:steel_barrel',
            'superbwarfare:steel_action',
            'superbwarfare:steel_trigger',
            'superbwarfare:steel_spring',
            '2x pneumaticcraft:plastic'
        ]
    )

    event.shapeless(
        Item.of('superbwarfare:epic_material_pack', 1),
        [
            'superbwarfare:cemented_carbide_barrel',
            'superbwarfare:cemented_carbide_action',
            'superbwarfare:cemented_carbide_trigger',
            'superbwarfare:cemented_carbide_spring',
            '2x pneumaticcraft:plastic',
            '2x immersiveengineering:plate_duroplast'
        ]
    )

    event.shapeless(
        Item.of('superbwarfare:legendary_material_pack', 1),
        [
            'superbwarfare:netherite_barrel',
            'superbwarfare:netherite_action',
            'superbwarfare:netherite_trigger',
            'superbwarfare:netherite_spring',
            '2x pneumaticcraft:plastic',
            '2x immersiveengineering:plate_duroplast',
            'crusty_chunks:tech_component'
        ]
    )

//replace items in recipes

    //minigun
    event.replaceInput(
        {output: 'superbwarfare:minigun'},
        'superbwarfare:motor',
        'crusty_chunks:large_electric_motor'
    )

    //ntw
    event.replaceInput (
        {output: 'superbwarfare:ntw_20'},
        'minecraft:spyglass',
        'crusty_chunks:huge_bored_barrel'
    )

    //m2hb
    event.replaceInput (
        {output: 'superbwarfare:m_2_hb'},
        '#superbwarfare:storage_blocks/steel',
        'crusty_chunks:autocannon_barrel'
    )
    event.replaceInput (
        {output: 'superbwarfare:m_2_hb'},
        'superbwarfare:rare_material_pack',
        'superbwarfare:legendary_material_pack'
    )

    //m60
    event.replaceInput (
        {output: 'superbwarfare:m_60'},
        'superbwarfare:ingots/cemented_carbide',
        'crusty_chunks:machine_gun_barrel'
    )
    event.replaceInput (
        {output: 'superbwarfare:m_60'},
        'superbwarfare:epic_material_pack',
        'superbwarfare:legendary_material_pack'
    )

    //aa12
    event.replaceInput (
        {output: 'superbwarfare:aa_12'},
        'minecraft:netherite_ingot',
        'crusty_chunks:large_bored_barrel'
    )

    const bprints = Ingredient.of('#superbwarfare:blueprint').itemIds
    bprints.forEach(prints => event.shapeless(
        Item.of(prints, 2),
        [
            prints,
            'minecraft:paper',
            'minecraft:blue_dye'
        ]
    ))
})