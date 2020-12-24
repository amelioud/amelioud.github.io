// HTML/CSS
var bar = new ProgressBar.SemiCircle(progres, {
  strokeWidth: 6,
  color: '#d3d5fd',
  trailColor: '#929aab',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e6e7fc'},
  to: {color: '#a2a5fc'},

  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }
    bar.text.style.color = state.color;
  }
});

bar.text.style.fontSize = '2rem';

bar.animate(0.9); 

// JavaScript
var bar = new ProgressBar.SemiCircle(progres1, {
  strokeWidth: 6,
  color: '#d3d5fd',
  trailColor: '#929aab',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e6e7fc'},
  to: {color: '#b0a2fc'},

  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }
    bar.text.style.color = state.color;
  }
});

bar.text.style.fontSize = '2rem';

bar.animate(0.6);

// Wordpress
var bar = new ProgressBar.SemiCircle(progres2, {
  strokeWidth: 6,
  color: '#d3d5fd',
  trailColor: '#929aab',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e6e7fc'},
  to: {color: '#bda2fc'},

  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }
    bar.text.style.color = state.color;
  }
});

bar.text.style.fontSize = '2rem';

bar.animate(0.8);

// PHP
var bar = new ProgressBar.SemiCircle(progres3, {
  strokeWidth: 6,
  color: '#d3d5fd',
  trailColor: '#929aab',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e6e7fc'},
  to: {color: '#cca2fc'},

  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }
    bar.text.style.color = state.color;
  }
});

bar.text.style.fontSize = '2rem';

bar.animate(0.7);

// TypeScript
var bar = new ProgressBar.SemiCircle(progres4, {
  strokeWidth: 6,
  color: '#d3d5fd',
  trailColor: '#929aab',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#e6e7fc'},
  to: {color: '#e1a2fc'},

  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }
    bar.text.style.color = state.color;
  }
});

bar.text.style.fontSize = '2rem';

bar.animate(0.6);