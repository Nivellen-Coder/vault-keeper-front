import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  imports: [],
  template: `<p>shell works!</p>`,
  styleUrl: './shell.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shell implements OnInit {
  ngOnInit(): void {}
}
