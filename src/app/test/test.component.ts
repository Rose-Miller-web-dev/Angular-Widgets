import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit{

  switchTheme = new FormControl(false)
  @HostBinding('class') className = ''
  darkClass = 'theme-dark'
  lightClass = 'theme-light'

  constructor(private overlay: OverlayContainer) {}
  ngOnInit(): void {
    
    this.switchTheme.valueChanges.subscribe((currentMode) => {
      this.className = currentMode ? this.darkClass : this.lightClass

      if(currentMode) {
        this.overlay.getContainerElement().classList.add(this.darkClass)
      }

      else {
        this.overlay.getContainerElement().classList.remove(this.darkClass)
      }
    })

  }
}

