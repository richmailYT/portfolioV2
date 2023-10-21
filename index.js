const app = Vue.createApp({
    data() {
        const skills = { nodejs: { slide_1: false, slide_2: false }, socketio: { slide_1: false, slide_2: false } }
        return {
            skills
        }
    },
    methods: {
        init() {
            
        },

        change_active_skill(skill, bool) {
            if (this.skills[skill].slide_1 == bool) {
                return;
            }

             if (bool == true) {
                this.skills[skill].slide_1 = bool;
            } else {
                this.skills[skill].slide_2 = bool;
            }

            setTimeout(() => {
                if (bool == false) {
                    this.skills[skill].slide_1 = bool;
                } else {
                    this.skills[skill].slide_2 = bool;
                }
            }, 200)
        }
    },
    mounted() {
        this.init();
    }
})
app.mount("#app");