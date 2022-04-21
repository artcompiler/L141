/* Copyright (c) 2021, ARTCOMPILER INC */
import {assert, message, messages, reserveCodeRange} from "./share.js";
import {
  Checker as BasisChecker,
  Transformer as BasisTransformer,
  Compiler as BasisCompiler,
  Renderer as BasisRenderer,
} from '@graffiticode/basis';
import fs from 'fs';
import https from 'https';
import postcss from 'postcss';
import postcssjs from 'postcss-js';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const validatedUsers = {};

function postAuth(path, data, resume) {
  const encodedData = JSON.stringify(data);
  const options = {
    host: "auth.artcompiler.com",
    port: "443",
    path: path,
    method: "POST",
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': Buffer.byteLength(encodedData),
    },
  };
  const req = https.request(options);
  req.on("response", (res) => {
    let data = "";
    res.on('data', function (chunk) {
      data += chunk;
    }).on('end', function () {
      if (res.statusCode === 401) {
        resume(res.statusCode, data);
      } else {
        try {
          data = JSON.parse(data);
          resume(data.error, data);
        } catch (e) {
          console.log("[11] ERROR " + data + " statusCode=" + res.statusCode);
          console.log(e.stack);
        }
      }
    }).on("error", function () {
      console.log("error() status=" + res.statusCode + " data=" + data);
    });
  });
  req.end(encodedData);
  req.on('error', function(err) {
    console.log("[12] ERROR " + err);
    resume(err);
  });
}

function validateUser(jwt, lang, resume) {
  if (jwt === undefined) {
    // User has not signed in.
    resume(401);
  } else {
    postAuth("/validateSignIn", { jwt }, (err, data) => {
      if (err && err.length) {
        // There is an issue with sign in.
        resume(err, data);
      } else {
        validatedUsers[jwt] = data;
        resume(err, data);
      }
    });
  }
}

export class Checker extends BasisChecker {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ENCODE_DATA(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  LABEL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [];
        const val = node;
        resume(err, val);
      });
    });
  }
  LOCATION(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [];
        const val = node;
        resume(err, val);
      });
    });
  }
  ONCLICK(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
      const err = [];
      const val = node;
      resume(err, val);
      });
    });
  }
  BORDER(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
      const err = [];
      const val = node;
      resume(err, val);
      });
    });
  }
  BUTTON(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  PRIMARY(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  OPTION_A(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  OPTION_B(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  OPTION_C(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_SM(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_MD(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_LG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_FULL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  UPPERCASE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  LOWERCASE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  CAPITALIZE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  NORMAL_CASE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  SHADOW(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  H_GRADIENT(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  V_GRADIENT(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  RAISED_BOTTOM(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  DIV(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
}

function attrFromVal(val) {
  let attr;
  if (typeof val === 'string') {
    attr = {
      'className': val,
    };
  } else {
    attr = {};
    Object.keys(val).forEach(key => {
      if (key === 'class') {
        attr['className'] = val[key];
      } else {
        const parts = key.split('-');
        let name = parts.shift();
        parts.forEach(part => {
          name += part.charAt(0).toUpperCase() + part.slice(1);
        });
        attr[name] = val[key];
      }
    });
  }
  return attr;
}

function attrsFromVal(val, attrs = {}) {
  if (typeof val === 'string') {
    attrs.className = val + ' ' + (attrs.className || '');
  } else if (val instanceof Array) {
    val.forEach((v) => {
      attrs = attrsFromVal(v, attrs);
    });
  } else {
    Object.keys(val).forEach(key => {
      if (key === 'class') {
        attrs.className = val[key] + ' ' + (attrs.className || '');
      } else {
        const parts = key.split('-');
        let name = parts.shift();
        parts.forEach(part => {
          name += part.charAt(0).toUpperCase() + part.slice(1);
        });
        attrs[name] = val[key];
      }
    });
  }
  return attrs;
}

const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
];

export class Transformer extends BasisTransformer {
  MEMBER_PROFILE(node, options, resume) {
    const data =
          options.data
          || {};
    const memberName =
          data.profile
          && data.profile.memberName
          || 'Member';
    const points =
          data.state
          && data.state.points
          || 0;
    const possiblePoints =
          data.content
          && data.content.quiz
          && data.content.quiz.length
          || 0;
    const totalPoints =
          data.profile
          && data.profile.totalPoints
          && data.profile.totalPoints + points
          || points;
    const attemptedPoints =
          data.profile
          && data.profile.attemptedPoints
          && data.profile.attemptedPoints + possiblePoints
          || possiblePoints;
    const rewardPoints =
          data.profile
          && data.profile.rewardPoints
          || 0;
    const err = [];
    const val = {
      "type": "div",
      "attr": {
        "className": "pb-4"
      },
      "elts": [{
        "type": "h3",
        "attr": {
          "className": "text-2xl pb-4"
        },
        "elts": [
          memberName,
        ]
      }, {
        "type": "div",
        "attr": {
          "className": "p-4 ml-4"
        },
        "elts": [{
          "type": "div",
          "attr": {},
          "elts": [`You have answered ${attemptedPoints} questions. You have gotten ${totalPoints} correct. You have earned ${totalPoints} points.`,
          ]
        }]
      }]
    };
    resume(err, val);
  }

  QUIZ_SCORE(node, options, resume) {
    const data = options.data || {};
    const points =
          data.state
          && data.state.points
          || 0;
    const possiblePoints =
          data.content
          && data.content.quiz
          && data.content.quiz.length
          || 0;
    const err = [];
    const val = `You got ${points} of ${possiblePoints} questions correct.`;
    resume(err, val);
  }

  ENCODE_DATA(node, options, resume) {
    // FIXME Construct and post a task to the root store and return the taskID.
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = 'abc123';
      resume(err, val);
    });
  }

  SAMPLE_DATA(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val =
            options.data
            && options.data.content
            && options.data.content.quiz
            || v0;
      resume(err, val);
    });
  }

  renderMultipleChoiceQuestion(attrs, data) {
    const self = this;
    const renderChoice = (choice) => {
      return {
        "type": "div",
        "attr": {},
        "elts": [
          {
            "type": "input",
            "attr": {
              "type": "radio",
              "name": "quiz1",
              "onInput": `showAnswer(${JSON.stringify(choice)})`,
            }
          },
          {
            "type": "label",
            "attr": {
              "className": "px-2 "
            },
            "elts": choice.answer,
          }
        ]
      };
    };

    const choices = [];
    data.choices.forEach((choice) => {
      choices.push(renderChoice(choice));
    });
    const question = {
      "type": "div",
      "attr": {
        "className": "pb-4"
      },
      "elts": [{
        "type": "h3",
        "attr": {
          "className": "text-2xl pb-4"
        },
        "elts": [
          data.question,
        ]
      }, ...choices
    ]};
    return question;
  }

  renderPoints(attrs, data) {
    const points = {
      "type": "div",
      "attr": {
        "className": "pb-4"
      },
      "elts": [{
        "type": "h3",
        "attr": {
          "className": "text-2xl pb-4"
        },
        "elts": [
          "You got 3 out of 3 question correct",
        ]
      },
    ]};
    return points;
  }

  MULTIPLE_CHOICE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        try {
          const
          index =
            options.data
            && options.data.action
            && options.data.action.index
            || 0;
          const
          err =
            [].concat(e0).concat(e1);
          const question = v1 instanceof Array && v1[index];
          let val;
          if (question === undefined) {
            // We have asked all the questions. Show the next page.
            val = this.renderPoints();
            options.data.action = {
              type: "gotoPage",
              pageName: "healthTip",
            };
          } else {
            val = this.renderMultipleChoiceQuestion(v0, question);
          }
          resume(err, val);
        } catch (x) {
          console.log(x.stack);
          resume(x.message);
        }
      });
    });
  }

  renderMultipleChoiceAnswer(attrs, choice) {
    const answer = {
      "type": "div",
      "attr": {},
      "elts": [{
        "type": "div",
        "attr": {
          "className": "p-4 ml-4"
        },
        "elts": [{
          "type": "div",
          "attr": {},
          "elts": [
            choice.message,
          ]
        }]
      }]
    };
    return answer;
  }

  MULTIPLE_CHOICE_ANSWER(node, options, resume) {
    try {
      this.visit(node.elts[0], options, async (e0, v0) => {
        v0 = [].concat(v0);  // Make sure v0 is an array.
        this.visit(node.elts[1], options, async (e1, v1) => {
          const choice =
                options.data
                && options.data.action
                && options.data.action.choice
                || { points: -1, message: 'No selection' };
          const err = [].concat(e0).concat(e1);
          const val = this.renderMultipleChoiceAnswer(v0, choice);
          resume(err, val);
        });
      });
    } catch (x) {
      console.log(x.stack);
      resume(x.message);
    }
  }

  USERNAME(node, options, resume) {
    console.log("username() options=" + JSON.stringify(options, null, 2));
    resume([], "Guest");
  }

  AUTHENTICATE_USER(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      if (e0 && e0.length) {
        resume(e0);
        return;
      }
      let val;
      const jwt = options.data.jwt;
      const lang = "L141";
      validateUser(jwt, lang, (err, data) => {
        if (err) {
          val = v0[0];
        } else {
          val = v0[1];
        }
        resume([], val);
      });
    });
  }

  LABEL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "label",
          attr: attrsFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  INPUT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "input",
        attr: attrsFromVal(v0),
      };
      resume(err, val);
    });
  }

  LOCATION(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      if (e0 && e0.length) {
        resume(e0);
      }
      this.visit(node.elts[1], options, async (e1, v1) => {
        options.location = `location.href=\"${v0}\"xxx`;
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  ONCLICK(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        const attrs = {};
        v0.forEach((v) => {
          attrs.onClick = v;
        });
        v1.attr = attrsFromVal(attrs, v1.attr);
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  ONLOAD(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        const attrs = {};
        v0.forEach((v) => {
          attrs.onLoad = v;
        });
        v1.attr = attrsFromVal(attrs, v1.attr);
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  BORDER(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        const attrs = [];
        v0.forEach((v) => {
          if (Number.isInteger(v)) {
            attrs.push(`border-${v}`);
          } else if (colors.includes(v.split('-')[0])){
            attrs.push(`border-${v}`);
          } else {
            attrs.push(v);
          }
        });
        v1.attr = attrsFromVal(attrs, v1.attr);
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  BUTTON(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "button",
        elts: v0,
        attr: attrsFromVal('text-base py-2 px-3'),
      };
      resume(err, val);
    });
  }

  PRIMARY(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gray-600 text-base py-2 px-3 text-white', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  OPTION_A(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gray-200 text-base py-2 px-3 text-black', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  OPTION_B(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border border-gray-600 bg-white text-base py-2 px-3 text-black', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  OPTION_C(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border-2 border-gray-400 bg-white text-base py-2 px-3 text-black', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_SM(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_MD(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-md', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_LG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-lg', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_FULL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-full', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  UPPERCASE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('uppercase', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  LOWERCASE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('lowercase', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  CAPITALIZE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('capitalize', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  NORMAL_CASE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('normal-case', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  SHADOW(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('shadow-lg', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  H_GRADIENT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gradient-to-r from-white', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  V_GRADIENT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gradient-to-t from-white', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  RAISED_BOTTOM(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border-b-4', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  RAISED_TOP(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border-t-4', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  IMG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "img",
        attr: attrFromVal(v0),
      };
      resume(err, val);
    });
  }

  SVG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "svg",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  PATH(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "path",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  CODE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "code",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  SPAN(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "span",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  P(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "p",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  A(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "a",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  OL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "ol",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  UL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "ul",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  LI(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "li",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  H3(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "h3",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  TITLE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        v1.elts.unshift({
          type: "title",
          elts: v0,
        });
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  DIV(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "div",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  LIST(node, options, resume) {
    let err = [];
    let val = [];
    if (node.elts.length === 0) {
      resume(err, val);
    } else {
      for (let i = 0; i < node.elts.length; i++) {
        let elt = node.elts[i];
        options = Object.assign({}, options, { key: i });
        this.visit(elt, options, (e0, v0) => {
          err = err.concat(e0);
          val[i] = v0;
          if (Object.keys(val).length === node.elts.length) {
            resume(err, val);
          }
        });
      }
    }
  }

  dumpPool() {
    Object.keys(this.nodePool).forEach((key) => {
      console.log(`${key} => ${JSON.stringify(this.nodePool[key], null, 2)}`);
    });
  }

  PROG(node, options, resume) {
    const finish = () => {
      this.visit(node.elts[0], options, (e0, v0) => {
        const err = e0;
        const val = v0.pop();  // Return the value of the last expression.
        if (options.data && options.data.action) {
          const action = options.data.action;
          if (action.type === 'gotoPage') {
            const jwt = options.data.jwt;
            const state = options.data.state;
            const page = val.pages[action.pageName];
            const index = action.index || 0;
            state.index = index;
            state.points =
              (state && state.points || 0)
              + (action.choice && action.choice.points || 0);
            resume(err, { jwt, page, state });
          } else if (action.type === 'signUp') {
            const state = options.data.state;
            const page = val.pages.signUp;
            resume(err, { page, state });
            return;
          } else if (action.type === 'signIn') {
            const number = action.data.number;
            const name = action.data.name;
            const data = { number, name };
            postAuth("/signIn", data, (err, data) => {
              const jwt = data.jwt;
              const page = val.pages.signIn;
              const state = options.data.state;
              resume(err, { jwt, page, state });
            });
            return;
          } else if (action.type === 'finishSignIn') {
            const jwt = options.data.jwt;
            const user = {
              id: options.data.id,
              number: options.data.number,
            };
            const state = Object.assign(options.data.state, { user });
            const page = val.pages.welcome;
            resume(err, { jwt, page, state });
          }
        } else {
          const jwt = options.jwt;
          const state = options.data.state;
          const page = val.pages.start;
          resume([], { jwt, page, state });
        }
      });
    };
    if (!options) {
      options = {};
    }
    if (options.data && options.data.action) {
      const data = options.data;
      const action = data.action;
      const state = data.state;
      if (action.type === 'finishSignIn') {
        const data = {
          jwt: action.data.jwt,
          passcode: action.data.passcode,
        };
        postAuth("/finishSignIn", data, (err, val) => {
          console.log("/finishSignIn val=" + JSON.stringify(val, null, 2));
          const jwt = val.jwt;  // Update jwt before page rendering.
          const id = val.id;
          const number = val.number;
          const user = { id, number };
          const data = {
            jwt,
            state: {
              user,
            },
          };
          options.data = Object.assign(options.data, data);
          finish();
        });
      } else {
        finish();
      }
    } else {
      finish();
    }
  }
}

const DEBUGGING = process.env.DEBUGGING === 'true';

export class Renderer extends BasisRenderer {
  constructor(data) {
    super();
    this.data = data;
  }
  render(options, resume) {
    // Do some rendering here.
    const err = [];
    const val = {
      data: this.data,
      errors: [],
    };
    resume(err, val);
  }
}

class Compiler extends BasisCompiler {
  constructor() {
    super({
      langID: 141,
      version: 'v0.0.1',
      Checker: Checker,
      Transformer: Transformer,
      Renderer: Renderer,
    });
  }
};

export const compiler = new Compiler();

