/// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// New Items
onEvent('item.registry', event => {

event.create('skyopolis_additions:nether_token').displayName('Nether Token').glow(true)
event.create('skyopolis_additions:end_token').displayName('End Token').glow(true)
event.create('skyopolis_additions:undergarden_token').displayName('Undergarden Token').glow(true)
event.create('skyopolis_additions:space_token').displayName('Space Token').glow(true)
event.create('skyopolis_additions:blank_token').displayName('Blank Token')

event.create('skyopolis_additions:sky_bucks').displayName('Sky Bucks')
event.create('skyopolis_additions:star').displayName('Star')

event.create('skyopolis_additions:weak_enriching_water_catalyst').displayName('Weak Enriching Water Catalyst')
event.create('skyopolis_additions:eroding_water_catalyst').displayName('Eroding Water Catalyst')
event.create('skyopolis_additions:strong_enriching_water_catalyst').displayName('Strong Enriching Water Catalyst')
event.create('skyopolis_additions:undergarden_enriching_water_catalyst').displayName('Undergarden Enriching Water Catalyst')
event.create('skyopolis_additions:nether_enriching_water_catalyst').displayName('Nether Enriching Water Catalyst')
event.create('skyopolis_additions:cosmos_enriching_water_catalyst').displayName('Cosmos Enriching Water Catalyst')
event.create('skyopolis_additions:ultimate_enriching_water_catalyst').displayName('Ultimate Enriching Water Catalyst')

event.create('skyopolis_additions:blank_bucket').displayName('Blank Bucket')
event.create('skyopolis_additions:blank_ingot').displayName('Blank Ingot')

event.create('skyopolis_additions:silver_ingot').displayName('Silver Ingot')
event.create('skyopolis_additions:silver_nugget').displayName('Silver Nugget')

event.create('skyopolis_additions:skyblock_menu').displayName('Skyblock Menu').texture(`minecraft:item/paper`).color(0, 0x2986CC).maxStackSize(1)



})

  
onEvent('block.modification', event => {
	event.modify('enderstorage:ender_chest', block => {
	  block.destroySpeed = 0.8
	})
})
  
onEvent('block.modification', event => {
	event.modify('enderstorage:ender_tank', block => {
	  block.destroySpeed = 0.8
	})
})




// New Blocks

onEvent('block.registry', event => {

event.create('skyopolis:blank_ore').displayName('Blank Ore').material('stone').hardness(1.0).requiresTool(false)

})

//New Fluids


onEvent('fluid.registry', event => {
  event.create('skyopolis:undergarden_enriching_water').displayName('Undergarden Enriching Water').thickTexture(0x3C4C34).bucketColor(0x3C4C34)
  event.create('skyopolis:weak_enriching_water').displayName('Weak Enriching Water').thickTexture(0xD79113).bucketColor(0xD79113)
  event.create('skyopolis:strong_enriching_water').displayName('Strong Enriching Water').thickTexture(0x808080).bucketColor(0x808080)
  event.create('skyopolis:nether_enriching_water').displayName('Nether Enriching Water').thickTexture(0x580704).bucketColor(0x580704)
  event.create('skyopolis:cosmos_enriching_water').displayName('Cosmos Enriching Water').thickTexture(0x323232).bucketColor(0x323232)
  event.create('skyopolis:eroding_water').displayName('Eroding Water').thickTexture(0x392C4C).bucketColor(0x392C4C)
  event.create('skyopolis:ultimate_enriching_water').displayName('Ultimate Enriching Water').thickTexture(0xFC99E7).bucketColor(0xFC99E7)

})

/*

onEvent('fluid.registry', event => {
  // Add sulfuric acid fluid.

  event.create('sulfur_acid')
  .thinTexture(0xFFFF00)
  .bucketColor(0xFFFF00)
  .color(0xFFFF00)
  .displayName('Sulfuric Acid')
})

*/