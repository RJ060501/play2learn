<template>
<main id="main-container">
      <div v-if="screen === 'config'" id="config-container">
      <h1>Anagram Hunt</h1>
      <SelectInput :currentValue="maxNumber" label="Maximum Number"
  id="max-number" v-model="maxNumber" :options="numbers" />
      <div>
        <ol>
            <li>Choose Word Length</li>
            <li>Press Play</li>
            <li>How many anagrams can you find in a minute?</li>
        </ol>
      </div>
      <PlayButton @play-button-click="play" />
    </div>
    <div v-else-if="screen === 'play'" id="game-container" class="text-center">
    <template v-if="timeLeft === 0">
        <h2>Time's Up!</h2>
        <strong class="big">You Answered</strong>
        <div class="huge">{{score}}</div>
        <strong class="big">Questions Correctly</strong>
        <button class="btn btn-primary form-control m-1"
          v-on:click="restart()">
            Play Again with Same Settings
        </button>
        <button class="btn btn-secondary form-control m-1"
          v-on:click="config()">
            Change Settings
        </button>
      </template>
      <template v-else> 

      <div class="row border-bottom" id="scoreboard">
    <div class="col px-3 text-left">
      <GameScore />
    </div>
    <div class="col px-3 text-right">
      <GameTimer />
    </div>
  </div>
  <div class="row text-secondary my-2" id="word">
    <GameWord />
  </div>
  <div class="row text-secondary my-2" id="answer">
    <GameAnswer :answer="input"/>
  </div>
  <div class="row text-secondary my-2" id="WordList">
    <GameWordList />
  </div>
</template>
</div>
  </main>
</template>

<script>
import PlayButton from './PlayButton.vue';
import SelectInput from './SelectInput.vue';
import GameScore from './GameScore.vue';
import GameTimer from './GameTimer.vue';
import GameWord from './GameWord.vue';
import GameAnswer from './GameAnswer.vue';
import GameWordList from './GameWordList.vue';

export default {
    name: 'MainContainer',
    components: {
    SelectInput,
    PlayButton,
    GameScore,
    GameTimer,
    GameWord,
    GameAnswer,
    GameWordList
},
data: function() {
        return {
        maxNumber: '5',
        screen: 'config',
        input: '',
        gameLength: '60',
        timeLeft: '0',
        }
      },
      methods: {
      config() {
        this.screen = "config";
      },
      play() {
        this.screen = "play";
        
        },
      setInput(value) {
        this.input += String(value);
        this.input = String(this.input)
      },
     

    },
      computed: {
  numbers: function() {
    const numbers = [];
    for (let number = 5; number <= 8; number++) {
      numbers.push([number, number]);
    }
    return numbers;
    },
   
}
}


</script>

<style scoped>
    #main-container {
      margin: auto;
      width: 380px;
    }
    
  </style>