const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeSearch");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("assets/img/pokemon-sad.gif");
            pokeNombre("Pokemon not found");
            pokeTipo("");
            pokePeso("");
            pokeAltura("");
            pokeHpValue("");
            pokeAttackValue("");
            pokeDefenseValue("");
            pokeSpAttackValue("");
            pokeSpDefenseValue("");
            pokeSpeedValue("");
            $("#pokemonType").hide();
            $(".wAndHRow").css({
                opacity: '0'
            });
            $("#hpBar").css({
                width: '0'
            });
            $("#atBar").css({
                width: '0'
            });
            $("#defenseBar").css({
                width: '0'
            });
            $("#spAtBar").css({
                width: '0'
            });
            $("#spDefBar").css({
                width: '0'
            });
            $("#speedBar").css({
                width: '0'
            });
        } else {
            return res.json();
        }
    }).then((data) => {
        let pokemonImg = data.sprites.front_default;
        let pokemonName = data.name;
        let pokemonType = data.types.map(type => type.type.name).join(", ");
        let pokemonHeight = data.height;
        let pokemonWeight = data.weight;
        let pokemonstatsHpValue = data.stats[0].base_stat;
        let pokemonstatsAttackValue = data.stats[1].base_stat;
        let pokemonstatsDefenseValue = data.stats[2].base_stat;
        let pokemonstatsSpAttackValue = data.stats[3].base_stat;
        let pokemonstatsSpDefenseValue = data.stats[4].base_stat;
        let pokemonstatsSpeedValue = data.stats[5].base_stat;
        pokeImage(pokemonImg);
        pokeNombre(pokemonName);
        pokeTipo(pokemonType);
        pokePeso(pokemonWeight);
        pokeAltura(pokemonHeight);
        pokeHpValue(pokemonstatsHpValue);
        pokeAttackValue(pokemonstatsAttackValue);
        pokeDefenseValue(pokemonstatsDefenseValue);
        pokeSpAttackValue(pokemonstatsSpAttackValue);
        pokeSpDefenseValue(pokemonstatsSpDefenseValue);
        pokeSpeedValue(pokemonstatsSpeedValue);
        $("#pokemonName").show();
        $("#pokemonType").show();
        $(".wAndHRow").css({
            opacity: '1'
        });
    })
};


const pokeImage = (url) => {
    const pokemonImg = document.getElementById("pokeImg");
    pokemonImg.src = url;
};
const pokeNombre = (name) => {
    const pokemonName = document.getElementById("pokemonName");
    pokemonName.textContent = name;
};
const pokeTipo = (tipo) => {
    const pokemonType = document.getElementById("pokemonType");
    pokemonType.textContent = "Type: " + tipo;
};
const pokePeso = (peso) => {
    const pokemonWeight = document.getElementById("pokemonWeight");
    let pokekilos = peso / 10;
    pokemonWeight.textContent = pokekilos.toFixed(2) + " Kgs";
};
const pokeAltura = (altura) => {
    const pokemonHeight = document.getElementById("pokemonHeight");
    let pokeAltura = altura / 10;
    pokemonHeight.textContent = pokeAltura.toFixed(2) + " m";
};
const pokeHpValue = (hp) => {
    const pokemonstatsHpValue = document.getElementById("hitNumber");
    const pokemonstatsHpValueBar = document.getElementById("hpBar");
    pokemonstatsHpValue.textContent = ": " + hp;
    pokemonstatsHpValueBar.style.width = `${hp}%`;
};
const pokeAttackValue = (attack) => {
    const pokemonstatsAttackValue = document.getElementById("attackNumber");
    const pokemonstatsAttackValueBar = document.getElementById("atBar");
    pokemonstatsAttackValue.textContent = ": " + attack;
    pokemonstatsAttackValueBar.style.width = `${attack}%`;
};
const pokeDefenseValue = (defense) => {
    const pokemonstatsDefenseValue = document.getElementById("defenseNumber");
    const pokemonstatsDefenseValueBar = document.getElementById("defenseBar");
    pokemonstatsDefenseValue.textContent = ": " + defense;
    pokemonstatsDefenseValueBar.style.width = `${defense}%`;
};
const pokeSpAttackValue = (spAttack) => {
    const pokemonstatsSpAttackValue = document.getElementById("spAtNumber");
    const pokemonstatsSpAttackValueBar = document.getElementById("spAtBar");
    pokemonstatsSpAttackValue.textContent = ": " + spAttack;
    pokemonstatsSpAttackValueBar.style.width = `${spAttack}%`;
};
const pokeSpDefenseValue = (spDefense) => {
    const pokemonstatsSpDefenseValue = document.getElementById("spDefNumber");
    const pokemonstatsSpDefenseValueBar = document.getElementById("spDefBar");
    pokemonstatsSpDefenseValue.textContent = ": " + spDefense;
    pokemonstatsSpDefenseValueBar.style.width = `${spDefense}%`;
};
const pokeSpeedValue = (speed) => {
    const pokemonstatsSpeedValue = document.getElementById("speedNumber");
    const pokemonstatsSpeedValueBar = document.getElementById("speedBar");
    pokemonstatsSpeedValue.textContent = ": " + speed;
    pokemonstatsSpeedValueBar.style.width = `${speed}%`;
};