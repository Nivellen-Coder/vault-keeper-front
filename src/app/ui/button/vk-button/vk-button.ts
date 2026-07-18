import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ButtonSize, ButtonVariant } from './vk-button.types';

@Component({
  selector: 'vk-button',
  templateUrl: 'vk-button.html',
  styleUrl: 'vk-button.scss',
})
export class VkButton {
  variant = input<ButtonVariant>('primary');

  size = input<ButtonSize>('md');

  disabled = input(false);

  loading = input(false);

  fullWidth = input(false);
}
