const MagicMax = 200;
const HealthMax = 500;
const BulletDamage = 50;
const BulletMagic = 50;
const PlayerMax = 4
const TowerMax = 8
const MapSize = 30
const SpiDelayMax = 600
const SpiBuffMax = 32
const ArmyMax = 7

const Get_Map = 0x4d
const Update_Player_Info = 0x61
const Attack_Hero = 0x62
const Player_Onlile = 0x63
const Tower_Attack_Hero = 0x64
const Other_Info = 0x65
const Update_Army_Info = 0x66

namespace projectImages {
    export const Gate_H = img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 2 2 2 2 2 2 4 4 2 2 2 2 2 2 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `;
    export const Tree1 = img`
        . . . . . . . c c . . . . . . .
        . . . . c c c 6 5 c 6 6 . . . .
        . . . . c 6 c 5 5 c 7 6 . . . .
        . . . 6 c c 7 5 5 7 c 6 6 . . .
        . . c c 7 7 7 7 7 5 7 7 c 6 . .
        . 6 6 6 c 6 7 7 7 7 6 c c 6 6 .
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6
        . c c 7 6 6 6 6 6 7 7 7 7 c 6 .
        . c 7 7 6 6 7 6 6 7 7 6 7 7 c .
        . c c c c 7 7 6 f 7 7 c c c c .
        . . . . c 7 c f f c 7 c . . . .
        . . . . . 6 f e e e c . . . . .
        . . . . . e e e e e e . . . . .
        . . . . e e . e e . e e . . . .
        . . . . . . . e e . . . . . . .
    `;
    export const Tree2 = img`
        . . . . . . 6 6 6 6 . . . . . .
        . . . . . c 6 7 7 6 c . . . . .
        . . . . c 6 7 5 7 7 6 c . . . .
        . . 6 6 c c 6 5 5 6 c c 6 6 . .
        6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6
        6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6
        . c c c 6 6 7 6 6 5 7 6 c c 6 .
        6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6
        6 6 7 7 7 c c c c c c 7 7 7 6 6
        6 7 7 7 6 6 c c c c 6 6 7 7 7 6
        c 6 c c 6 7 6 c c 6 7 6 c c 6 c
        . c c 5 5 7 6 7 7 6 7 5 5 c c .
        . c 6 7 5 5 6 7 7 6 5 5 7 6 c .
        . 6 6 7 7 6 6 5 5 6 6 7 7 6 6 .
        . . 6 6 6 6 c 6 7 6 c 6 6 6 . .
        . . . 6 6 c . 6 6 6 . c 6 . . .
    `;
    export const Tree3 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . c c c c 6 . . . . .
        . . . . c c 6 7 7 5 5 6 6 . . .
        . . c c 6 6 6 6 7 5 5 7 c c . .
        . c 6 6 6 7 7 7 7 7 7 5 6 c c .
        . c 6 6 7 7 7 5 7 6 7 7 7 6 c c
        c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c
        c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c
        c c c c 6 7 7 6 7 7 7 6 7 6 6 c
        . c c 6 6 6 6 c 6 6 6 6 6 c c c
        . c c 6 6 c 6 6 c 6 c 6 6 c c .
        . . c c f f 6 6 c f f c c f . .
        . . . . c f c c c f c f f . . .
        . . . . . 4 f f f c . e . . . .
        . . . . . . e e e . . 4 . . . .
        . . . . . . . e e . e . . . . .
    `;
    export const Tree4 = img`
        . . . . 6 7 6 6 6 6 6 7 6 . . .
        . . 6 7 7 c 2 7 6 6 c 3 7 6 . .
        . 7 7 7 c 2 2 2 7 7 6 c 3 7 6 .
        7 7 6 6 c c 2 5 5 6 c c 6 6 7 6
        6 6 2 5 5 6 6 7 5 2 5 5 7 6 6 7
        6 2 2 2 7 5 7 6 2 2 2 6 7 7 7 6
        7 c 2 c 6 6 6 6 6 2 7 6 c c 6 7
        6 c 6 6 6 6 6 c c 6 6 6 6 2 c 6
        6 6 7 6 7 c c 2 c c c 7 2 2 2 6
        6 7 7 7 6 6 2 2 2 c 6 6 7 2 7 6
        c 6 c c 6 7 6 2 c 6 7 6 c c 6 c
        7 c c 5 2 7 6 7 7 2 7 5 5 c c 6
        7 c 6 2 2 2 6 7 2 2 2 6 7 6 c .
        . . 7 7 2 6 6 5 5 2 6 7 6 7 . .
        . . . 6 7 6 c f 7 6 c f f . . .
        . . . . 6 c 7 7 6 6 7 c f . . .
    `;
    export const TowerR = img`
        . . . . . . f f f f . . . . . .
        . . . . f f 2 2 2 2 f f . . . .
        . . . f b 2 2 2 2 2 2 b f . . .
        . . . f 2 2 2 2 2 2 2 2 f . . .
        . . f d 2 2 2 2 2 2 2 2 d f . .
        . . f d 2 2 2 2 2 2 2 2 d f . .
        . . f d d d 2 2 2 2 d d d f . .
        . . f b d b f d d f b d b f . .
        . . f c d c f 1 1 f c d c f . .
        . . . f b 1 1 1 1 1 1 b f . . .
        . . f f f c d b 1 b d f f f f .
        f c 1 1 1 c b f b f c 1 1 1 c f
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f
        f b f b f f f f f f b f b f b f
        . . . . . f f f f f f . . . . .
        . . . . . . . f f f . . . . . .
    `;
    export const TowerB = img`
        . . . . . . f f f f . . . . . .
        . . . . f f 8 8 8 8 f f . . . .
        . . . f b 8 8 8 8 8 8 b f . . .
        . . . f 8 8 8 8 8 8 8 8 f . . .
        . . f d 8 8 8 8 8 8 8 8 d f . .
        . . f d 8 8 8 8 8 8 8 8 d f . .
        . . f d d d 8 8 8 8 d d d f . .
        . . f b d b f d d f b d b f . .
        . . f c d c f 1 1 f c d c f . .
        . . . f b 1 1 1 1 1 1 b f . . .
        . . f f f c d b 1 b d f f f f .
        f c 1 1 1 c b f b f c 1 1 1 c f
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f
        f b f b f f f f f f b f b f b f
        . . . . . f f f f f f . . . . .
        . . . . . . . f f f . . . . . .
    `;
    export const AddSpeed = img`
        . . . . . . . . . . . . . . . .
        . . . . 3 3 3 3 3 3 3 3 . . . .
        . . . 3 d 3 3 3 3 3 3 c 3 . . .
        . . 3 c d 3 3 3 3 3 3 c c 3 . .
        . 3 c c d d d d d d 3 c c d 3 d
        . 3 c 3 a a a a a a a b c d 3 3
        . 3 3 a b b a b b b a a b d 3 3
        . 3 a b b b a b b b b a 3 3 3 3
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
        . a a a a a a f a a a f a 3 d d
        . a a a a a a f a a f a a a 3 d
        . a a a a a a f f f a a a a a a
        . a f f f f a a a a f f f a a a
        . . f f f f f a a f f f f f a .
        . . . f f f . . . . f f f f . .
        . . . . . . . . . . . . . . . .
    `;
    export const AddPower = img`
        . . . c c c c c c . . . . . . .
        . . c 6 7 7 7 7 6 c . . . . . .
        . c 7 7 7 7 7 7 7 7 c . . . . .
        c 6 7 7 7 7 7 7 7 7 6 c . . . .
        c 7 c 6 6 6 6 c 7 7 7 c . . . .
        f 7 6 f 6 6 f 6 7 7 7 f . . . .
        f 7 7 7 7 7 7 7 7 7 7 f . . . .
        . f 7 7 7 7 6 c 7 7 6 f . . . .
        . . f c c c c 7 7 6 f c c c . .
        . . c 6 2 7 7 7 f c c 7 7 7 c .
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c
        . c 1 1 1 1 1 6 6 6 6 6 6 c . .
        . c 6 1 1 1 1 1 6 6 6 6 6 c . .
        . . c 6 1 1 1 1 1 7 6 6 c c . .
        . . . c c c c c c c c c c . . .
    `;
}
namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Background = SpriteKind.create()
    export const BulletR = SpriteKind.create() //子弹
    export const BulletB = SpriteKind.create() //子弹
}
function BitSetA(a: number, b: number) {
    return (a |= (1 << b))
}
function BitClrA(a: number, b: number) {
    return (a &= ~(1 << b))
}
function BitAntA(a: number, b: number) {
    return (a ^= (1 << b))
}
function FunSelectAttackHero() {
    PlayerImgArray[SelectAttackHero].drawImage(PlayerImgArrayBak[SelectAttackHero], 0, 0)
    if (user_id >= PlayerMax / 2) {
        SelectAttackHero++;
        if (SelectAttackHero >= PlayerMax / 2) SelectAttackHero = 0
    }
    else {
        SelectAttackHero++;
        if (SelectAttackHero >= PlayerMax) SelectAttackHero = PlayerMax / 2
    }

    for (i = 0; i < PlayerSpriteArray[SelectAttackHero].image.width; i++) {
        PlayerSpriteArray[SelectAttackHero].image.setPixel(i, PlayerSpriteArray[SelectAttackHero].image.height - 1, 2)
        PlayerSpriteArray[SelectAttackHero].image.setPixel(i, 0, 2)
    }
    for (i = 0; i < PlayerSpriteArray[SelectAttackHero].image.height; i++) {
        PlayerSpriteArray[SelectAttackHero].image.setPixel(0, i, 2)
        PlayerSpriteArray[SelectAttackHero].image.setPixel(1, i, 2)
        PlayerSpriteArray[SelectAttackHero].image.setPixel(PlayerSpriteArray[SelectAttackHero].image.width - 1, i, 2)
        PlayerSpriteArray[SelectAttackHero].image.setPixel(PlayerSpriteArray[SelectAttackHero].image.width - 2, i, 2)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    KeyBit1 = BitSetA(KeyBit1, 4)
    if (gameState == 1) {
        for (i = 0; i < ServerSprite.length; i++) {
            if (pointer.overlapsWith(ServerSprite[i])) {
                g_SetServerIp = i
                break
            }
        }
        for (i = 0; i < PlayerImgArray.length; i++) {
            if (pointer.overlapsWith(PlayerSpriteArray[i])) {
                user_id = i
                gameState = 2
                GetPlayerCount = 0
                break
            }
        }
    }
    if (gameState == 4) {
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    KeyBit1 = BitClrA(KeyBit1, 4)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    KeyBit1 = BitSetA(KeyBit1, 5)
    if (gameState == 5) {
        FunSelectAttackHero()
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    KeyBit1 = BitClrA(KeyBit1, 5)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    KeyBit1 = BitSetA(KeyBit1, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    KeyBit1 = BitClrA(KeyBit1, 0)
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    KeyBit1 = BitSetA(KeyBit1, 1)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    KeyBit1 = BitClrA(KeyBit1, 1)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    KeyBit1 = BitSetA(KeyBit1, 2)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    KeyBit1 = BitClrA(KeyBit1, 2)
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    KeyBit1 = BitSetA(KeyBit1, 3)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    KeyBit1 = BitClrA(KeyBit1, 3)
})

/*
sprites.onOverlap(SpriteKind.Enemy,SpriteKind.BulletR, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 0)
})

sprites.onOverlap(SpriteKind.Player,SpriteKind.BulletB, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 0)  
})
*/
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {

})
let Level=1
let Progress=0
let LevelUp=0
let GameTickRun = 0
let Speed = 0
let AttackPower = 0
let nRecvChecksum = 0
let nChecksum = 0
let nTemp = 0
let kk = 0
let DelayCount = 0
let GetPlayerCount = 0
let LoadMapCount = 0
let LoadMapY = 0
let DispSkill = pins.createBuffer(6)
let DispSkillTmp = pins.createBuffer(6)
let BitMask: number[] = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80]
let SelectAttackHero = 0
let UserNameArray: string[] = []
let PlayerArray_x = pins.createBuffer(PlayerMax)
let PlayerArray_y = pins.createBuffer(PlayerMax)
let SkillUpdateArray = pins.createBuffer(PlayerMax)
let UseSkillArray = pins.createBuffer(PlayerMax)
let AttackHeroArray = pins.createBuffer(PlayerMax)
let HealthArray = pins.createBuffer(PlayerMax)
let MagicArray = pins.createBuffer(PlayerMax)
let KeyBit1 = 0
let Minimap: minimap.Minimap = null
let PlayerSpriteArray: Sprite[] = []
let PlayerImgArray: Image[] = []
let PlayerImgArrayBak: Image[] = []
let pointer: Sprite = null
let g_SetServerIp = -1
let gameState = 0
let strServerIp: string[] = []
let SkillImgArray: Image[] = []
let user_id = 0
let i = 0
let j = 0
let k = 0
let arr: string[] = []
let strSend: string = ""
let strSplit: string = ""
let Canvas: Sprite
let ServerSprite: Sprite[] = []
let ArmySpriteR: Sprite[] = []
let ArmySpriteB: Sprite[] = []
let MenuTextSprite: TextSprite[] = []
let textSprite0 = textsprite.create("", 0, 2)
let textSprite1 = textsprite.create("", 0, 2)
let textSprite2 = textsprite.create("", 0, 2)
let textSprite3 = textsprite.create("", 0, 2)
let SendBuff: Buffer = pins.createBuffer(SpiBuffMax)
let RecvdBuff: Buffer = pins.createBuffer(SpiBuffMax)
let SendBuffCmd: Buffer = pins.createBuffer(2)
let RecvdBuffCmd: Buffer = pins.createBuffer(2)
let DsiplayBuff: Buffer = pins.createBuffer(SpiBuffMax)
let x = 0
let y = 0
let TimeCount = 0;
let DrawMapCount = 100
let img1 = image.create(32, 32)

let Map = img`
    999999999999999999999999999999.....
    95122...............444......9.....
    91122...............4449.....9.....
    92222.99999994.499999..9.....9.....
    92222.99333333.333339....b...9.....
    9......2914444.444119........9.....
    9..99..22.144...4119...b..99.9.....
    9..992222..144.4114........449.....
    9..939222..9144114.........449.....
    9..932.....291119...b...999449.....
    9..9342....22339.......9229..9.....
    9..934429222233.......42239..9.....
    9..9344429222....b...422439..9.....
    9..434.44233........9224439..9.....
    9.......4233.......9224.434..9.....
    9..434.4229.......3324.......9.....
    9..9344229........33244.434..9.....
    9..934224...a....2229244439..9.....
    9..93224.......332222924439..9.....
    9..9229.......93322....2439..9.....
    944999...a...911192.....439..9.....
    944.........4114419..222939..9.....
    944........4114.441..222299..9.....
    9.99..a...9114...441.22..99..9.....
    9........911444.4444192......9.....
    9...a....913333.33333399.22229.....
    9.....9..999994.49999999.22229.....
    9.....9444...............22119.....
    9......444...............22169.....
    999999999999999999999999999999.....
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
`
let statusbarPlayerHealthArray: StatusBarSprite[] = []
let statusbarPlayerMagicArrat: StatusBarSprite[] = []
SkillImgArray = [img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 4 4 . . . . . . .
    . . . . . . 4 9 9 4 . . . . . .
    . . . . . . 2 9 9 2 . . . . . .
    . . . . . . . 2 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 4 4 . . . . . . .
    . . . . . . 4 5 5 4 . . . . . .
    . . . . . . 2 5 5 2 . . . . . .
    . . . . . . . 2 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, img`
    4 . . . . . . . . . . . . . . .
    . 4 . . . . . . . . . . . 9 3 .
    . . 4 . . . . . . . . . 3 . . .
    . . . 4 . . . . . . . 3 . . . .
    . . . . 4 . . . . . 4 . . . . .
    . . . . 2 . . . . 4 4 . . . . .
    . . . . 2 4 . . 4 5 4 . . . . .
    . . . . . 2 4 d 5 5 4 . . . . .
    . . . . . 2 5 5 2 5 4 . . . . .
    . . . . . . 2 5 5 5 5 4 . . . .
    . . . . . . 2 5 4 2 4 4 . . . .
    . . . . . . 4 4 . . 2 4 4 . . .
    . . . . . 4 4 . . . . . . 9 . .
    . . . . 4 . . . . . . . . 9 . .
    . . 9 2 . . . . . . . . . . 9 .
    9 9 . . . . . . . . . . . . . 9
`, img`
    . . . a a a a a a a . . . . . .
    . . a . . . . . . . a . . . . .
    . a . . a . . . . . . a . . . .
    . . . . . a a . . . . . a . . .
    . . . 3 . . . a . . 4 . a . a .
    . 3 3 . 2 . . . . 4 4 . a a . .
    3 . . . 2 4 . . 4 8 4 a a . . .
    . . . . . 2 4 d 8 8 4 . a . . .
    . . . . a 2 8 8 8 8 4 . a . . .
    . . . 3 . . 2 8 8 8 8 4 a . . .
    . . 3 . . . 2 8 4 2 4 a . . . .
    . 3 . . . . 4 4 . . a 4 4 . . .
    3 . . . . . 3 a a a . . . . . .
    . . . . . 3 . . . . . . . . . .
    . . . . 3 . . . . . . . . . . .
    . . . 3 . . . . . . . . . . . .
`, img`
    2 . . . . . . 2 . . . . . . . 2
    . 2 . . . . . 2 . . . . . . 2 .
    . 2 2 . . . . 9 9 . . . 2 2 . .
    . . 2 . . . . 9 . . . 2 . . . .
    . . 2 2 . . . 9 . . 2 . . . . .
    . . . . 5 . . 9 . 5 5 . . . . 2
    . . . . 5 5 . 9 5 a 5 . . 2 2 2
    . . . . . 5 5 7 a a 5 . 2 9 . .
    . . . . . 5 4 a a a 5 2 9 . . .
    . . . . . . 5 a a a 4 5 . . . .
    2 2 9 9 9 9 5 5 7 7 5 5 . . . .
    . . . . . . 5 5 . . 5 5 2 . . .
    . . . . . 5 5 . 9 . . . . 2 . .
    . . . . . . . . 2 . . . . 2 . .
    . . . . . . . . 2 . . . . . 2 .
    . . . . . . . 2 2 . . . . . . 2
`, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . 5 . . . . . . . . . . 5 . . .
    . . 5 . . . . . . . . 5 . . . .
    . . . 5 . . . . . . 5 . . . . .
    . . . . 5 . . . . 4 4 . . . . .
    . . . . 2 4 . . 4 e 4 . . . 5 .
    . . . . . 2 4 d e e 4 . 5 5 . .
    . . . . . 2 e e e e 4 5 . . . .
    . . . 5 5 5 2 e e e e 4 . . . .
    5 5 5 . . . 2 e 4 2 4 4 . . . .
    . . . . . . 4 4 . . 2 4 4 5 . .
    . . . . . 4 4 . . . . . . 5 . .
    . . . 5 5 . . . . . . . . . 5 .
    5 5 5 . . . . . . . . . . . 5 .
    . . . . . . . . . . . . . . . 5
`, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 . . . . . .
    . . 2 . . . . . . . 2 . . . . .
    . 2 . . . . . . . . 4 2 . . . .
    2 . . . 2 . . . . 4 4 . 2 . . .
    2 . . . 2 4 . . 4 5 4 . 2 . . .
    2 . . . . 2 4 d 5 5 4 . 2 . . .
    2 . . . . 2 5 5 2 2 4 . 2 . . .
    2 . . . . . 2 5 5 2 2 2 2 . . .
    2 . . . . . 2 5 4 2 4 2 2 . . .
    2 . . . . . 4 4 . . 2 4 2 2 2 .
    . 2 . . . 4 4 . . . . 2 . . . .
    . . 2 . . . . . . . 2 . . . . .
    . . . 2 2 2 2 2 2 2 . . . . . .
    . . . . . . . . . . . . . . . .
`]
user_id = 0
PlayerImgArray = [img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, img`
    . . . . . . f f f f . . . . . .
    . . . . f f e e e e f f . . . .
    . . . f f e e e e e e f f . . .
    . . f f f f 4 e e e f f f f . .
    . . f f f 4 4 4 e e f f f f . .
    . . f f f 4 4 4 4 e e f f f . .
    . . f 4 e 4 4 4 4 4 4 e 4 f . .
    . . f 4 4 f f 4 4 f f 4 4 f . .
    . . f e 4 d d d d d d 4 e f . .
    . . . f e d d b b d d e f . . .
    . . . f f e 4 4 4 4 e f f . . .
    . . e 4 f b 1 1 1 1 b f 4 e . .
    . . 4 d f 1 1 1 1 1 1 f d 4 . .
    . . 4 4 f 6 6 6 6 6 6 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, img`
    . . . . . f f f f . . . . .
    . . . f f 5 5 5 5 f f . . .
    . . f 5 5 5 5 5 5 5 5 f . .
    . f 5 5 5 5 5 5 5 5 5 5 f .
    . f 5 5 5 d b b d 5 5 5 f .
    f 5 5 5 b 4 4 4 4 b 5 5 5 f
    f 5 5 c c 4 4 4 4 c c 5 5 f
    f b b f b f 4 4 f b f b b f
    f b b 4 1 f d d f 1 4 b b f
    . f b f d d d d d d f b f .
    . f e f e 4 4 4 4 e f e f .
    . e 4 f 6 9 9 9 9 6 f 4 e .
    . 4 d c 9 9 9 9 9 9 c d 4 .
    . 4 f b 3 b 3 b 3 b b f 4 .
    . . f f 3 b 3 b 3 3 f f . .
    . . . . f f b b f f . . . .
`]
PlayerImgArrayBak = [img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, img`
    . . . . . . f f f f . . . . . .
    . . . . f f e e e e f f . . . .
    . . . f f e e e e e e f f . . .
    . . f f f f 4 e e e f f f f . .
    . . f f f 4 4 4 e e f f f f . .
    . . f f f 4 4 4 4 e e f f f . .
    . . f 4 e 4 4 4 4 4 4 e 4 f . .
    . . f 4 4 f f 4 4 f f 4 4 f . .
    . . f e 4 d d d d d d 4 e f . .
    . . . f e d d b b d d e f . . .
    . . . f f e 4 4 4 4 e f f . . .
    . . e 4 f b 1 1 1 1 b f 4 e . .
    . . 4 d f 1 1 1 1 1 1 f d 4 . .
    . . 4 4 f 6 6 6 6 6 6 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, img`
    . . . . . f f f f . . . . .
    . . . f f 5 5 5 5 f f . . .
    . . f 5 5 5 5 5 5 5 5 f . .
    . f 5 5 5 5 5 5 5 5 5 5 f .
    . f 5 5 5 d b b d 5 5 5 f .
    f 5 5 5 b 4 4 4 4 b 5 5 5 f
    f 5 5 c c 4 4 4 4 c c 5 5 f
    f b b f b f 4 4 f b f b b f
    f b b 4 1 f d d f 1 4 b b f
    . f b f d d d d d d f b f .
    . f e f e 4 4 4 4 e f e f .
    . e 4 f 6 9 9 9 9 6 f 4 e .
    . 4 d c 9 9 9 9 9 9 c d 4 .
    . 4 f b 3 b 3 b 3 b b f 4 .
    . . f f 3 b 3 b 3 3 f f . .
    . . . . f f b b f f . . . .
`]
let ArmyImgR = img`
    . . 4 4 4 . . . . 4 4 4 . . . .
    . 4 5 5 5 e . . e 5 5 5 4 . . .
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . .
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . .
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . .
    . e e 5 5 5 5 5 5 5 5 e e . . .
    . . e 5 f 5 5 5 5 f 5 e . . . .
    . . f 5 5 5 4 4 5 5 5 f . . f f
    . . f 4 5 5 f f 5 5 5 f . f 5 f
    . . . f 5 5 5 5 5 5 4 4 f 5 5 f
    . . . f 4 5 5 5 5 5 5 4 4 5 f .
    . . . f 5 5 5 5 5 4 5 5 f f . .
    . . . f 5 f f f 5 f f 5 f . . .
    . . . f f . . f f . . f f . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
let ArmyImgB = img`
    . . 4 4 4 . . . . 4 4 4 . . . .
    . 4 7 7 7 e . . e 7 7 7 4 . . .
    4 7 7 7 7 7 e e 7 7 7 7 7 4 . .
    4 7 7 4 4 7 7 7 7 4 4 7 7 4 . .
    e 7 4 4 7 7 7 7 7 7 4 4 7 e . .
    . e e 7 7 7 7 7 7 7 7 e e . . .
    . . e 7 f 7 7 7 7 f 7 e . . . .
    . . f 7 7 7 4 4 7 7 7 f . . f f
    . . f 4 7 7 f f 7 7 6 f . f 7 f
    . . . f 6 6 6 6 6 6 4 4 f 7 7 f
    . . . f 4 7 7 7 7 7 7 4 4 7 f .
    . . . f 7 7 7 7 7 4 7 7 f f . .
    . . . f 7 f f f 7 f f 7 f . . .
    . . . f f . . f f . . f f . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
let TowerXArray: number[] = [4, 6, 9, 12, 17, 20, 23, 25]
let TowerYArray: number[] = [25, 23, 20, 17, 12, 9, 6, 4]
let TowerHealt: number[] = [20, 20, 20, 20, 20, 20, 20, 20]
let TowerId: number[] = [10, 10, 10, 10, 11, 11, 11, 11]
DispSkillTmp[1] = 0x45
DispSkillTmp[2] = 0x46
DispSkillTmp[3] = 0x41
DispSkillTmp[4] = 0x43
DispSkillTmp[5] = 0x44

for (i = 0; i < PlayerMax; i++) {
    UserNameArray[i] = ""
}
for (y = 0; y < 32; y++) {
    for (x = 0; x < 32; x++) {
        img1.setPixel(x, y, x)
    }
}

//let imgSprite1 = sprites.create(img1, SpriteKind.Object)
//imgSprite1.setPosition(130, 50)
strServerIp[0] = "192.168.0.138"
strServerIp[1] = "192.168.1.250"
textSprite0.left = 10
textSprite0.top = 85
textSprite1.left = 10
textSprite1.top = 85 + 8
textSprite2.left = 10
textSprite2.top = 85 + 16
textSprite3.left = 10
textSprite3.top = 85 + 24
scene.setBackgroundColor(1)
pins.createSPI(pins.P15, pins.P14, pins.P13)
pins.spiFrequency(10000000)
//pins.spiFrequency(2000000)
pins.spiMode(3)

//Half Original Quarter Eighth Sixteenth
Minimap = minimap.minimap(MinimapScale.Sixteenth, 1, 4)

//info.setScore(0)

for (i = 0; i < PlayerImgArray.length; i++) {
    PlayerSpriteArray[i] = sprites.create(PlayerImgArray[i], SpriteKind.Enemy)
    if (i >= PlayerImgArray.length / 2) {
        PlayerSpriteArray[i].setPosition(30 + i * 25, 75)
    }
    else {
        PlayerSpriteArray[i].setPosition(20 + i * 25, 55)
    }
    PlayerSpriteArray[i].z = -1
    statusbarPlayerHealthArray[i] = statusbars.create(18, 3, StatusBarKind.Health)
    statusbarPlayerHealthArray[i].max = 255
    statusbarPlayerHealthArray[i].value = 250
    statusbarPlayerHealthArray[i].attachToSprite(PlayerSpriteArray[i], 3, 0)
    statusbarPlayerHealthArray[i].z = -1

    statusbarPlayerMagicArrat[i] = statusbars.create(18, 3, StatusBarKind.Magic)
    statusbarPlayerMagicArrat[i].setColor(0x8, 0x9)
    statusbarPlayerMagicArrat[i].attachToSprite(PlayerSpriteArray[i], 0, 0)
    statusbarPlayerMagicArrat[i].max = 255
    statusbarPlayerMagicArrat[i].value = 250
    statusbarPlayerMagicArrat[i].z = -1
    PlayerSpriteArray[i].image
}


game.onUpdateInterval(30, function () {
    if (gameState == 0) {
        pointer = sprites.create(img`
            . . . f f f . . .
            . . . f 1 f . . .
            . . . f 1 f . . .
            f f f 1 1 1 f f f
            f 1 1 1 . 1 1 1 f
            f f f 1 1 1 f f f
            . . . f 1 f . . .
            . . . f 1 f . . .
            . . . f f f . . .
        `, SpriteKind.Player)
        controller.moveSprite(pointer)
        pointer.setFlag(SpriteFlag.StayInScreen, true)
        pointer.z = 10
        ServerSprite[0] = sprites.create(img`
            . . . b b b b b b b b b . . . .
            . . b 1 d d d d d d d 1 b . . .
            . b 1 1 1 1 1 1 1 1 1 1 1 b . .
            . b d b c c c c c c c b d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c 6 d 6 6 6 6 6 c d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c c c c c c c c c d b . .
            . c b b b b b b b b b b b c . .
            c b c c c c c c c c c c c b c .
            c 1 d d d d d d d d d d d 1 c .
            c 1 d 1 1 d 1 1 d 1 1 d 1 1 c .
            c b b b b b b b b b b b b b c .
            c c c c c c c c c c c c c c c .
        `, SpriteKind.Object)
        ServerSprite[1] = sprites.create(img`
            . . . b b b b b b b b b . . . .
            . . b 1 d d d d d d d 1 b . . .
            . b 1 1 1 1 1 1 1 1 1 1 1 b . .
            . b d b c c c c c c c b d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c 6 d 6 6 6 6 6 c d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c 6 6 6 6 6 6 6 c d b . .
            . b d c c c c c c c c c d b . .
            . c b b b b b b b b b b b c . .
            c b c c c c c c c c c c c b c .
            c 1 d d d d d d d d d d d 1 c .
            c 1 d 1 1 d 1 1 d 1 1 d 1 1 c .
            c b b b b b b b b b b b b b c .
            c c c c c c c c c c c c c c c .
        `, SpriteKind.Object)

        for (i = 0; i < ServerSprite.length; i++) {
            ServerSprite[i].setPosition(20, i * 20 + 10)
            MenuTextSprite[i] = textsprite.create(strServerIp[i], 0, 2)
            MenuTextSprite[i].left = 30
            MenuTextSprite[i].top = 5 + i * 20;
        }

        gameState = 1
    }
    if (gameState == 1) {
        if (g_SetServerIp > -1) {
            textSprite1.setText(g_SetServerIp.toString())
            strSend = "IP," + strServerIp[g_SetServerIp]
            g_SetServerIp = -1
            textSprite0.setText(strSend)
            for (i = 0; i < SpiBuffMax; i++) {
                SendBuff[i] = 0
            }
            for (i = 0; i < strSend.length; i++) {
                SendBuff[i] = strSend.charCodeAt(i)
            }
            SendBuffCmd[0] = 2
            pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
            pins.spiTransfer(SendBuff, RecvdBuff)
            for (DelayCount = 0; DelayCount < SpiDelayMax; DelayCount++) { }
            SendBuffCmd[0] = 3
            pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
            pins.spiTransfer(SendBuff, RecvdBuff)
            strSend = RecvdBuff.toString()
            textSprite0.setText("tx:" + SendBuff.toString())
        }

        SendBuff[0] = 0x60
        SendBuff[1] = user_id
        SendBuff[2] = KeyBit1
        SendBuff[3] = 0
        //计算校验和
        nChecksum = 0
        nTemp = 0
        for (i = 0; i < 30; i++) {
            nTemp = SendBuff[i] & 0xff
            nChecksum += nTemp
        }
        SendBuff[30] = nChecksum & 0xff
        SendBuff[31] = (nChecksum >> 8) & 0xff
        //计算校验和

        SendBuffCmd[0] = 2
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        textSprite2.setText("tx:" + SendBuff.toString())
        SendBuffCmd[0] = 3
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        strSend = RecvdBuff.toString()
        textSprite0.setText("tx:" + SendBuff.toString())

        strSplit = RecvdBuff.toString()
        arr = strSplit.split(",")
        if (arr.length > 0) {
            if (arr[0] == "W0") {
                textSprite1.setText("rx:" + RecvdBuff.toString())
            }
            if (arr[0] == "K0") {
                textSprite3.setText("rx:" + RecvdBuff.toString())
            }
        }

        for (i = 0; i < SpiBuffMax; i++) {
            SendBuff[i] = 0
        }
        strSend = "KY,"
        for (i = 0; i < strSend.length; i++) {
            SendBuff[i] = strSend.charCodeAt(i)
        }
        SendBuffCmd[0] = 2
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        textSprite2.setText("tx:" + SendBuff.toString())
        SendBuffCmd[0] = 3
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        strSend = RecvdBuff.toString()
        textSprite2.setText("tx:" + SendBuff.toString())
        strSplit = RecvdBuff.toString()
        arr = strSplit.split(",")
        if (arr.length > 0) {
            if (arr[0] == "W0") {
                textSprite1.setText("rx:" + RecvdBuff.toString())
            }
            if (arr[0] == "K0") {
                textSprite3.setText("rx:" + RecvdBuff.toString())
            }
        }
    }
    if (gameState == 2) {
        for (i = 0; i < SpiBuffMax; i++) {
            SendBuff[i] = 0
        }
        SendBuff[0] = Player_Onlile
        SendBuff[1] = user_id
        //计算校验和
        nRecvChecksum = 0
        nChecksum = 0
        nTemp = 0
        for (i = 0; i < 30; i++) {
            nTemp = SendBuff[i] & 0xff
            nChecksum += nTemp
        }
        SendBuff[30] = nChecksum & 0xff
        SendBuff[31] = (nChecksum >> 8) & 0xff
        //计算校验和

        SendBuffCmd[0] = 2
        for (DelayCount = 0; DelayCount < SpiDelayMax; DelayCount++) { }
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        for (DelayCount = 0; DelayCount < SpiDelayMax; DelayCount++) { }
        RecvdBuff[0] = 0
        SendBuffCmd[0] = 3
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        for (DelayCount = 0; DelayCount < SpiDelayMax; DelayCount++) { }
        if (RecvdBuff[0] == 0x01) {
            if (user_id >= PlayerMax / 2) {
                SelectAttackHero = 0;
            }
            else {
                SelectAttackHero = PlayerMax / 2
            }
            FunSelectAttackHero()
            gameState = 3
            LoadMapY = 0
        }

        if (GetPlayerCount++ > 50) gameState = 1

    }

    if (gameState == 3) {
        if (TimeCount++ > 1000) TimeCount = 0;
        textSprite0.setText("Load Map:" + LoadMapY.toString())

        SendBuff[0] = Get_Map
        SendBuff[1] = LoadMapY
        //计算校验和
        nRecvChecksum = 0
        nChecksum = 0
        nTemp = 0
        for (i = 0; i < 30; i++) {
            nTemp = SendBuff[i] & 0xff
            nChecksum += nTemp
        }
        SendBuff[30] = nChecksum & 0xff
        SendBuff[31] = (nChecksum >> 8) & 0xff
        //计算校验和

        SendBuffCmd[0] = 2
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        for (DelayCount = 0; DelayCount < SpiDelayMax; DelayCount++) { }
        SendBuffCmd[0] = 3
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        textSprite1.setText(RecvdBuff.toString())

        if ((RecvdBuff[0] == Get_Map && RecvdBuff[1] == LoadMapY) || LoadMapCount++ > 200) {
            for (k = 0; k < MapSize; k++) {
                Map.setPixel(k, LoadMapY, RecvdBuff[k + 2])
            }
            LoadMapY++

            if (LoadMapY == MapSize || LoadMapCount > 200) {
                LoadMapY = 0
                scene.setTileMap(Map);
                scene.setTile(10, projectImages.TowerR, false);
                scene.setTile(11, projectImages.TowerB, false);
                scene.setTile(9, projectImages.Gate_H, false);
                scene.setTile(1, projectImages.Tree1, false);
                scene.setTile(2, projectImages.Tree2, false);
                scene.setTile(3, projectImages.Tree3, false);
                scene.setTile(4, projectImages.Tree4, false);
                scene.setTile(5, projectImages.AddSpeed, false);
                scene.setTile(6, projectImages.AddPower, false);
                scene.setBackgroundColor(1)
                scene.cameraFollowSprite(PlayerSpriteArray[user_id]);
                PlayerSpriteArray[user_id].setKind(SpriteKind.Player)
                gameState = 4

                for (i = 0; i < ArmyMax; i++) {
                    ArmySpriteR[i] = sprites.create(ArmyImgR, SpriteKind.Object)
                    ArmySpriteB[i] = sprites.create(ArmyImgB, SpriteKind.Object)
                    ArmySpriteR[i].setPosition(i * 20, 480 - i * 20)
                    ArmySpriteR[i].z = -2
                    ArmySpriteB[i].setPosition(480 - i * 20, i * 20)
                    ArmySpriteB[i].z = -2
                }
                textSprite0.destroy()
                textSprite1.destroy()
                textSprite2.destroy()
                textSprite3.destroy()
            }
        }

    }
    if (gameState == 4) {
        pointer.destroy()
        for (i = 0; i < ServerSprite.length; i++) {
            ServerSprite[i].destroy()
            MenuTextSprite[i].destroy()
        }
        gameState = 5
        TimeCount = 0;
    }
    if (gameState == 5) {
    }
})
let g_bCmdCount = true
function GameTick() {
    if (GameTickRun == 1) {
        return
    }
    GameTickRun = 1
    if (gameState == 5) {
        if (g_bCmdCount) {
            SendBuff[0] = Update_Player_Info
        }
        else {
            SendBuff[0] = Update_Army_Info
        }
        g_bCmdCount = !g_bCmdCount

        SendBuff[1] = user_id
        SendBuff[2] = KeyBit1
        SendBuff[3] = 0  //SendBuff[3]在esp8266里面改写为扩展按键值
        SendBuff[4] = SelectAttackHero
        //计算校验和
        nRecvChecksum = 0
        nChecksum = 0
        nTemp = 0
        for (i = 0; i < 30; i++) {
            nTemp = SendBuff[i] & 0xff
            nChecksum += nTemp
        }
        SendBuff[30] = nChecksum & 0xff
        SendBuff[31] = (nChecksum >> 8) & 0xff
        nRecvChecksum = SendBuff[31] & 0xff
        nRecvChecksum <<= 8
        nRecvChecksum += SendBuff[30] & 0xff
        for (DelayCount = 0; DelayCount < SpiDelayMax; DelayCount++) { }
        SendBuffCmd[0] = 2
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)
        for (DelayCount = 0; DelayCount < SpiDelayMax; DelayCount++) { }
        SendBuffCmd[0] = 3
        pins.spiTransfer(SendBuffCmd, RecvdBuffCmd)
        pins.spiTransfer(SendBuff, RecvdBuff)

        //计算校验和
        nRecvChecksum = 0
        nChecksum = 0
        nTemp = 0
        for (i = 0; i < 30; i++) {
            nTemp = RecvdBuff[i] & 0xff
            nChecksum += nTemp
        }
        nRecvChecksum = RecvdBuff[31] & 0xff
        nRecvChecksum <<= 8
        nRecvChecksum += RecvdBuff[30] & 0xff
        if (nRecvChecksum == nChecksum) //校验和相等
        {
            if (RecvdBuff[0] == Update_Army_Info) {
                j = 1
                for (i = 0; i < ArmyMax; i++) {
                    ArmySpriteR[i].setPosition(RecvdBuff[j++] * 2, RecvdBuff[j++] * 2)
                }
                for (i = 0; i < ArmyMax; i++) {
                    ArmySpriteB[i].setPosition(RecvdBuff[j++] * 2, RecvdBuff[j++] * 2)
                }
            }
            if (RecvdBuff[0] == Update_Player_Info || RecvdBuff[0] == Other_Info) {
                j = 1
                for (i = 0; i < PlayerMax; i++) {
                    PlayerSpriteArray[i].setPosition(RecvdBuff[j++] * 2, RecvdBuff[j++] * 2)
                    SkillUpdateArray[i] = RecvdBuff[j++]
                    statusbarPlayerHealthArray[i].value = RecvdBuff[j++]
                    statusbarPlayerMagicArrat[i].value = RecvdBuff[j++]
                }

                if (RecvdBuff[0] == Other_Info) {
                    Speed = RecvdBuff[j++] 
                    AttackPower = RecvdBuff[j++] 
                    Level = RecvdBuff[j++] 
                    Progress = RecvdBuff[j++]
                    LevelUp = RecvdBuff[j++]
                }
                else {
                    for (k = 0; k < TowerMax; k++) {
                        let HealtTemp = RecvdBuff[j++]
                        if (HealtTemp > 0) {
                            TowerHealt[k] = HealtTemp / 12.75
                            if (TowerHealt[k] < 2) TowerHealt[k] = 2
                            Map.setPixel(TowerXArray[k], TowerYArray[k], TowerId[k])

                        }
                        else {
                            TowerHealt[k] = 0
                            Map.setPixel(TowerXArray[k], TowerYArray[k], 2)
                        }
                    }
                }
            }
            if (RecvdBuff[0] == Attack_Hero) {
                j = 1
                for (i = 0; i < PlayerMax; i++) {
                    PlayerSpriteArray[i].setPosition(RecvdBuff[j++] * 2, RecvdBuff[j++] * 2)
                    SkillUpdateArray[i] = RecvdBuff[j++]
                    UseSkillArray[i] = RecvdBuff[j++]
                    AttackHeroArray[i] = RecvdBuff[j++]

                    if (UseSkillArray[i] > 0) {
                        if (AttackHeroArray[i] > 9) {
                            let x1 = 0.0
                            let y1 = 0.0
                            let fd = 0.0
                            let Fire_x = 0
                            let Fire_y = 0

                            x1 = (TowerXArray[AttackHeroArray[i] - 10] * 16 + 8) - PlayerSpriteArray[i].x
                            y1 = (TowerYArray[AttackHeroArray[i] - 10] * 16) - PlayerSpriteArray[i].y
                            fd = Math.sqrt(x1 * x1 + y1 * y1)
                            x1 = x1 / fd
                            y1 = y1 / fd
                            Fire_x = Math.ceil(x1 * 200)
                            Fire_y = Math.ceil(y1 * 200)
                            let projectile1 = sprites.createProjectileFromSprite(SkillImgArray[UseSkillArray[i] - 1], PlayerSpriteArray[i], Fire_x, Fire_y)
                            projectile1.lifespan = 500
                            projectile1.setKind(SpriteKind.BulletR)
                            music.zapped.play()
                        }
                        else {
                            let projectile1 = sprites.createProjectileFromSprite(SkillImgArray[UseSkillArray[i] - 1], PlayerSpriteArray[i], 50, 50)
                            projectile1.lifespan = 500
                            projectile1.setKind(SpriteKind.BulletR)
                            projectile1.follow(PlayerSpriteArray[AttackHeroArray[i]], 400)
                            music.zapped.play()
                        }
                    }
                }
                let TowerAttackBit = RecvdBuff[j++]
                if (TowerAttackBit > 0) {
                    for (i = 0; i < TowerMax; i++) {
                        if ((TowerAttackBit & BitMask[i]) > 0) {
                            let projectile1 = sprites.create(SkillImgArray[0], SpriteKind.Object)
                            projectile1.setPosition(TowerXArray[i] * 16 + 8, TowerYArray[i] * 16)
                            projectile1.setVelocity(50, 50)
                            projectile1.lifespan = 500
                            projectile1.setKind(SpriteKind.BulletR)
                            projectile1.follow(PlayerSpriteArray[RecvdBuff[j + i]], 400)
                            music.zapped.play()
                        }
                    }
                }
            }
        }
    }
    GameTickRun = 0
}

forever(function () {
    GameTick()
})

game.onUpdate(function () {
    GameTick()
})

scene.createRenderable(scene.HUD_Z, function (target, camera) {
    const w = 31;
    const h = 31;
    const x = target.width - w;
    const y = target.height - h - 8;
    let k = 0;
    if (gameState < 5)
    {
        screen.print("GS="+gameState.toString(), x + 2, 110, 0x02, image.font8)
    }
    if (gameState == 5) {
        screen.fillRect(0, 0, 180, 6, 15);
        screen.fillRect(0, 114, 160, 6, 15);
        for (k = 0; k < TowerMax / 2; k++) {
            screen.fillRect(k * 25, 0, TowerHealt[k + TowerMax / 2], 3, 7);
            screen.fillRect(k * 25, 117, TowerHealt[TowerMax / 2 - k - 1], 3, 7);
        }
        // Draw outline
        //      screen.drawRect(x,y,w,h,0x7);
        // Fill inside rect
        //      screen.fillRect(x,y,w,h,0xf);                       
        if (DrawMapCount++ > 20) {
            for (k = 1; k < 6; k++) //编号0技能无效
            {
                if ((SkillUpdateArray[user_id] & BitMask[k]) > 0) {
                    DispSkill[k] = DispSkillTmp[k]
                }
                else {
                    DispSkill[k] = 0x20
                }
            }

            //Half Original Quarter Eighth Sixteenth
            Minimap = minimap.minimap(MinimapScale.Sixteenth, 1, 15)
            for (i = 0; i < PlayerSpriteArray.length; i++) {
                minimap.includeSprite(Minimap, PlayerSpriteArray[i], 3)
            }

            for (i = 0; i < ArmyMax; i++) {
                minimap.includeSprite(Minimap, ArmySpriteR[i], 1)
                minimap.includeSprite(Minimap, ArmySpriteB[i], 1)
            }
            DrawMapCount = 0
        }
        screen.drawTransparentImage(Minimap.image, x, y)
        screen.print(DispSkill.toString(), x + 2, 115, 0x01, image.font5)
        screen.print(Speed.toString() + " " + AttackPower.toString(), 98, 115, 0x01, image.font5)
        screen.print("L"+Level.toString() + " " + Progress.toString() + "/" + LevelUp.toString(), 98, 0, 0x09, image.font5);
    }
})


