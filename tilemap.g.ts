// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level_0":
            case "level_0":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000001010101000000000000000000000000000000000000000000000000000000000101010101010101010101000000000000000000`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0], TileScale.Sixteen);
            case "level_1":
            case "level_1":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000030000000000000000000000000000000000000003000000000000000000000000000000000000000300000000000000000000000000000202020200030001010101010100000000000000000200000003000000000000000001010101020202020000000300000000000000000000000002000000000000030101010101010101010101020000000000000003`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 . . 
. 2 2 2 2 2 2 . . . . . . . . 2 . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . 2 . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths0,sprites.builtin.coral0], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000030000000000010000000000000000000000000003000001010102010101000101000101000000000300000000000000000000020200000201010100030001010101010000000002020000000200000003000000000000000000000202000000020000000300000000000001000000020201000002000000030101010101010201010102020201010201010103`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 . 2 2 . 2 2 . . . . . 
. . . . . . . . . . 2 2 . . 2 2 2 2 . . 
. 2 2 2 2 2 . . . . 2 2 . . . 2 . . . . 
. . . . . . . . . . 2 2 . . . 2 . . . . 
. . . . . . 2 . . . 2 2 2 . . 2 . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
