import {
  ChangeDetectionStrategy,
  Component,
  input
} from '@angular/core';

import {
  ButtonSize,
  ButtonVariant
} from './vk-button.types';

@Component({
  selector: 'vk-button',
  standalone: true,
  templateUrl: './vk-button.html',
  styleUrl: './vk-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {

  readonly variant = input<ButtonVariant>('primary');

  readonly size = input<ButtonSize>('md');

  readonly disabled = input(false);

  readonly fullWidth = input(false);

  readonly loading = input(false);

}
