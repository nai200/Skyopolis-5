// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.add.items', e => {

    e.add([Item.of('minecraft:ghast_spawn_egg', '{EntityTag:{id:"minecraft:snow_golem"},RepairCost:0,display:{Name:\'{"text":"Snow Golem Spawn Egg"}\'}}')])
	
});


onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide(['create:crushed_uranium_ore', 'create:crushed_lead_ore', 'create:crushed_tin_ore', 'create:crushed_osmium_ore', 'create:crushed_zinc_ore', 'create:crushed_copper_ore', 'create:crushed_gold_ore', 'create:crushed_iron_ore'])
	event.hide(['caveopolis:diorite_pebble', 'caveopolis:granite_pebble', 'caveopolis:andesite_pebble', 'caveopolis:cobblestone_pebble', 'caveopolis:stone_pebble', 'caveopolis:wooden_shears', 'caveopolis:mossy_string'])

	const colours = [`white`,`light_gray`,`gray`,`black`,`red`,`orange`,`yellow`,`lime`,`green`,`light_blue`,`cyan`,`blue`,`purple`,`magenta`,`pink`,`brown`]
	const refined = [`controller`,`creative_controller`,`grid`,`crafting_grid`,`pattern_grid`,`fluid_grid`,`network_receiver`,`network_transmitter`,`relay`,`detector`,`security_manager`,`wireless_transmitter`,`disk_manipulator`,`crafter`,`crafter_manager`,`crafting_monitor`]

	//const applied = [`smart_cable`, `covered_cable`, `glass_cable`, `covered_dense_cable`,`smart_dense_cable`]
	
	colours.forEach(colours => {
		refined.forEach(refined => {
			event.hide([
				`refinedstorage:${colours}_${refined}`
			])
		})
	})

})

onEvent('item.tooltip', tooltip => {
    tooltip.add(['refinedstorage:network_receiver', 'refinedstorage:fluid_grid', 'refinedstorage:pattern_grid', 'refinedstorage:crafting_grid', 'refinedstorage:grid', 'refinedstorage:controller', 'refinedstorage:creative_controller', 'refinedstorage:network_transmitter', 'refinedstorage:crafting_monitor', 'refinedstorage:network_transmitter', 'refinedstorage:relay', 'refinedstorage:detector', 'refinedstorage:security_manager', 'refinedstorage:wireless_transmitter', 'refinedstorage:disk_manipulator', 'refinedstorage:crafter', 'refinedstorage:crafter_manager'], [Text.of('These blocks can be dyed, press "u" on the item to view those recipes. Right clicking with a dye on the block will also change the colour').color(0x808080)])

	tooltip.add(['skyopolis_additions:weak_enriching_water_catalyst'], 'Drop into a water source block to create weak enriching water')
	tooltip.add(['skyopolis_additions:undergarden_enriching_water_catalyst'], 'Drop into a weak enriching water source block to create undergarden enriching water')
	tooltip.add(['skyopolis_additions:strong_enriching_water_catalyst'], 'Drop into a undergarden enriching water source block to create strong enriching water')
	tooltip.add(['skyopolis_additions:nether_enriching_water_catalyst'], 'Drop into a strong enriching water source block to create nether enriching water')
	tooltip.add(['skyopolis_additions:ultimate_enriching_water_catalyst'], 'Drop into a cosmos enriching water source block to create ultimate enriching water')
	tooltip.add(['skyopolis_additions:eroding_water_catalyst'], 'Drop into a water source block to create eroding water')
	tooltip.add(['skyopolis_additions:cosmos_enriching_water_catalyst'], 'Drop into a nether enriching water source block to create cosmos enriching water')
	tooltip.add(['skyopolis:aqua_catalyst'], 'Right click on a mulch block to create water')
	tooltip.add(['skyopolis:flower_loot_box'], 'Right click to open!')
	tooltip.add(['skyopolis:sapling_loot_box'], 'Right click to open!')
	tooltip.add(['minecraft:mycelium'], 'Right click a mushroom ball on a block of dirt to create mycelium')
	tooltip.add(['minecraft:dirt'], 'Right click bone meal on a block of mulch to create dirt')
	tooltip.add(['minecraft:water'], 'Right click a aqua catalyst on a block of mulch to create a water source block')
	tooltip.add(['skyopolis_additions:blank_bucket'], 'Drop into any skyopolis water to create a bucket of that water!')
	tooltip.add(['undergarden:virulent_mix_bucket'], 'Bucket is destoryed when moving this fluid!')
})



