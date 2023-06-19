import { Toast } from 'vant';
import { defineComponent, onMounted, ref } from 'vue';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import s from './StartPage.module.scss'
import { Button } from '../shared/Button';
import { Icon } from '../shared/Icon';
import { Navbar } from '../shared/Navbar';
import { MainLayout } from '../layouts/MainLayout';
import { RouterLink } from 'vue-router';
import { Overlay, OverlayIcon } from '../shared/Overlay';
export const StartPage = defineComponent({
  setup: (props, context) => {
    onMounted(()=>{
      // Toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   duration: 0
      // });
    })
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value
    }
    return () => (
      <MainLayout>{
        {
          title: () => '山竹记账',
          icon: () => <OverlayIcon />,
          default: () => <>
            <Center class={s.pig_wrapper}>
              <Icon name="pig" class={s.pig} />
            </Center>
            <div class={s.button_wrapper}>
              <RouterLink to="/items/create">
                <Button class={s.button}>开始记账</Button>
              </RouterLink>
            </div>
            <RouterLink to="/items/create">
              <FloatButton iconName='add' />
            </RouterLink>
          </>
        }
      }</MainLayout>
    )
  }
})