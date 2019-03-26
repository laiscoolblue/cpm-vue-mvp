import Vue from 'vue';
import MyComponent from '@/components/MyComponent.vue';

describe('MyComponent.vue', () => {
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function');
  });

  it('sets the correct default data', () => {
    const defaultData = MyComponent.data();
    expect(defaultData.message).toBe('hello!');
  });

  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount();
    expect(vm.message).toBe('bye!');
  });

  it('can access exampleFunction', () => {
    const methods = MyComponent.methods.exampleMethod();
    expect(methods).toBe('banana');
  });

  it('can access exampleFunction3', () => {
    MyComponent.methods.exampleMethod3 = jest.fn();
    MyComponent.methods.exampleMethod2();

    expect(MyComponent.methods.exampleMethod3).toHaveBeenCalled();
  });
});
