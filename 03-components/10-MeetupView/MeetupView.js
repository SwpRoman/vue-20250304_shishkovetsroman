import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupDescription,
    MeetupCover,
    MeetupInfo
  },
  props: {
    meetup: {
      required: true,
      type: Object
    }
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image" />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">

            <h2>Описание</h2>
            <MeetupDescription :description="meetup.description" />

            <h2>Программа</h2>
            <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda" />

            <UiAlert v-else>Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo :date="meetup.date" :place="meetup.place" :organizer="meetup.organizer" />
            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
