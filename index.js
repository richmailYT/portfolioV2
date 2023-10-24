const app = Vue.createApp({
    data() {
        const skills_array = [ "nodejs", "socketio", "vue3" ];
        const skills = new Object();

        for (let i = 0; i < skills_array.length; i++) {
            skill = skills_array[i]
            skills[skill] = new Object();
            skills[skill].slide_1 = false;
            skills[skill].slide_2 = false;
        }
        
        return {
            skills,
            skills_array
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
                if (this.skills[skill].slide_1 == bool) {
                    return;
                }
                this.skills[skill].slide_1 = bool;
            } else {
                if (this.skills[skill].slide_2 == bool) {
                    return;
                }
                this.skills[skill].slide_2 = bool;
            }

            setTimeout(() => {
                if (bool == false) {
                    if (this.skills[skill].slide_1 == bool) {
                        return;
                    }
                    this.skills[skill].slide_1 = bool;
                } else {
                    if (this.skills[skill].slide_2 == bool) {
                        return;
                    }
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