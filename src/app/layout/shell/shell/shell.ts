import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayout } from '../../layouts/main-layout/main-layout'

@Component({
  selector: 'vk-shell',
  standalone: true,
  imports: [MainLayout],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shell {}
