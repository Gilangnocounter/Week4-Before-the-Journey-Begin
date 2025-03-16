function meleeRangedGrouping (str) {
    //Base Case 1
    if(str === '')return [];

    let arr = str.split(',')
    //Base case 2
    if(arr.length === 1){
        let hero = arr[0]
        if(hero.includes('-Ranged')) return [[hero.replace(/-Ranged/g, '')]]
        if(hero.includes('-Melee')) return [[hero.replace(/-Melee/g, '')]]
        return [[], []];
    }

    let hero = arr[0];
    let group = meleeRangedGrouping(arr.slice(1).join(','));

   

    // if(hero.includes('-Ranged')){
    //     group[0].push(hero.replace(/-Ranged/, ''))
    // }
    // if(hero.includes('-Melee')){
    //     group[1].push(hero.replace(/-Melee/, ''))
    // }

    return group
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Melee,Chen-Melee,Dazzle-Melee,Io-Melee'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []