import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

/**
 * Abstract class that should be extended by all custom components
 * that are using RxJS subscriptions.
 * 
 * Why ? Because each subscribe should be unsubscribed when the
 * component is destroyed. This class is doing that for us and we
 * don't have to do it manually in each component.
 * 
 * /!\ Don't forget to call the stopSubscriptions() method
 * if you override the ngOnDestroy() method in your component
 */
export abstract class ComponentWithSub implements OnDestroy {

  // RxJS subscriptions
  protected subscriptions: Subscription[] = [];

  /**
   * Unsubscribe to all RxJS subscriptions
   */
  stopSubscriptions() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnDestroy() {
    this.stopSubscriptions();
  }
}