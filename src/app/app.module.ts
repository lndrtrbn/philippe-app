import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { BrandComponent } from './components/brand/brand.component';
import { SoundItemComponent } from './components/sound-item/sound-item.component';
import { SoundListComponent } from './components/sound-list/sound-list.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChannelItemComponent } from './components/channel-item/channel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    BrandComponent,
    SoundItemComponent,
    SoundListComponent,
    ChannelListComponent,
    ChannelItemComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
