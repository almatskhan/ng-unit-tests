import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorDirective } from './color.directive';
import { Component, Directive } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <p appColor="yellow">text 1</p>
  <p appColor=>text 2</p>
  `
})
class HostComponent {}

describe('ColorDirective', () => {
  let fixture: ComponentFixture<HostComponent>

  const mockElementRef: any = {
    nativeElement: {
      offsetWidth: 100
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorDirective, HostComponent ]
    })

    fixture = TestBed.createComponent(HostComponent)
    fixture.detectChanges()
  })

  it('should create an instance', () => {
    const directive = new ColorDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });

  it('should apply input color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0]

    expect(de.nativeElement.style.backgroundColor).toBe('yellow')
  })

  it('should apply default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1] 

    let directive = de.injector.get(ColorDirective)

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor)
  })
});
