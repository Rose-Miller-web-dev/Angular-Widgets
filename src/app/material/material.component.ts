import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private overlay: OverlayContainer) {}

  toggleControl = new FormControl(false)
  @HostBinding('class') className = ''
  darkClassName = 'theme-dark'
  lightClassName = 'theme-light'

  ngOnInit(): void {

      this.toggleControl.valueChanges.subscribe((darkMode) => {
        this.className = darkMode ? this.darkClassName : this.lightClassName

        if(darkMode) {
          this.overlay.getContainerElement().classList.add(this.darkClassName)

        } else {
          this.overlay.getContainerElement().classList.remove(this.darkClassName)
        }

      })
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
