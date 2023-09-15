import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit{

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

}

