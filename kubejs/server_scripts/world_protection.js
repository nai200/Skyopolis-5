// priority: 50

onEvent('block.break', event => {
    if (!event.player.isCreativeMode()){
        if (event.block.hasTag('skyopolis:undergarden_protected')){
            if (event.level.dimension == 'undergarden:undergarden'){
                event.cancel()
                event.player.tell(`§cThis block cannot be broken in this dimension!`)
            }
        }
    }
})

onEvent('block.right_click', event => {
    if (!event.player.isCreativeMode()){
        if (event.block.id == ('minecraft:spawner'))
        if (event.hand == MAIN_HAND)
        if (event.item.hasTag('skyopolis:banned_spawn_eggs')){
            event.cancel()
            event.player.tell(`§cThis spawn egg cannot be used in spawners!`)
        }
    }
})
   
//Skyblock Menu

onEvent('item.right_click', event => {
    if (event.item.id == 'skyopolis_additions:skyblock_menu') {event.server.schedule(5, event.server, function (callback) {
//    let command = `execute as ${event.player.name} in ${event.player.level.dimension} run skyblock gui}`
    let command = `execute as ${event.player} run skyblock gui`
    callback.server.runCommandSilent(command);})
    //if (!event.player.isCreativeMode()) {event.item.setCount(event.item.getCount() - 1)}
    }  
})


/*

onEvent('block.right_click', event => {
    if (!event.player.isCreativeMode()){
        if (event.block.id == 'tconstruct:crafting_station'){
                event.cancel()
                event.player.tell(`§cThis block cannot be interacted with its broken!`)
        }
   }
})

*/


