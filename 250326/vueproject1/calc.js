Vue.createApp({
  data() {
    return {
      x: 20, 
      y: 20,
      result: 0
    }
  },
  methods: {
    calculateHandler(){
      this.result = this.x + this.y;
    }
  },
}).mount("#app");

//마운트는 보통 유닉스 환경에서 사용되는 명령어다. 유닉스에서 모든 것들이 루트 트리에서 cd-rom이던 usb던간에 특정 디렉토리에 연결시킨다. 이를 마운트라 한다. (하부트리가 생김)