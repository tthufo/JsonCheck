import React, { Fragment, Component } from 'react';
// import {
//   Col, Row
// } from 'reactstrap';
// import Dropzone from 'react-dropzone'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const whiteList = [
  'text_question',
  'text_answer',
  'checkbox_question',
  'checkbox_input_box',
  'checkbox_answer',
  'list_question',
  'list_input_box',
  'select_question',
  'select_input_box',
  'select_answer',
  'table_header',
  'table_cell']

function DUP(array, value) {
  let valuesAlreadySeen = []
  for (let i = 0; i < array.length; i++) {
    if (value == array[i]) {
      valuesAlreadySeen.push(value)
    }
  }
  return valuesAlreadySeen.length > 1
}

function NOLINK(array, value) {
  let valuesAlreadySeen = []
  for (let i = 0; i < array.length; i++) {
    if (value == array[i]) {
      valuesAlreadySeen.push(value)
    }
  }
  return valuesAlreadySeen.length = 0
}

function INID(array, value) {
  let valuesAlreadySeen = []
  for (let i = 0; i < array.length; i++) {
    if (value == array[i]) {
      valuesAlreadySeen.push(value)
    }
  }
  return valuesAlreadySeen.length >= 1
}

const ROW = ({ data }) => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '40%', margin: '25px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 'auto', padding: 10, fontSize: 22, border: '1px dashed black' }}>
          {`Page No: ${data[0].page} | Errors found: ${data.length}`}
        </div>
      </div>
      {data && data.map(d => {
        return (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 'bold', margin: 6, textAlign: 'left', width: '30%' }}>
              <div style={{ flexDirection: 'column' }}>
                <div>
                  {`Item No: ${d.item + 1}`}
                </div>
                <div>
                  {`ID: ${d.id}`}
                </div>
                {/* <button
                  onClick={() => copy(d.id)}
                >COPY
                </button> */}
                <CopyToClipboard text={d.id}
                >
                  <button style={{ fontWeight: 'bold' }}>COPY</button>
                </CopyToClipboard>
              </div>
            </div>
            <div style={{ fontStyle: 'italic', margin: 6, textAlign: 'left', width: '70%', height: '100%' }}>
              {d.error && d.error.map(k => {
                return (
                  <div style={{ flex: 1, display: 'flex', marginBottom: 10, flexDirection: 'row' }}>
                    {k}
                    {
                      k.includes('Unique ID list') &&
                      <div style={{ marginLeft: 10 }}>
                        <CopyToClipboard text={k.replace('Linking item not in Unique ID list: ', '')}
                        >
                          <button style={{ fontWeight: 'bold' }}>COPY</button>
                        </CopyToClipboard>
                      </div>
                    }
                  </div>
                );
              })}
            </div>
          </div>
        )
      })}
      <div style={{ width: 'auto', height: 1, border: '1px solid gray' }}>

      </div>
    </div>
  );
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      pagetwodata: '',
      error: false,
      data: [],
      copy: '',
    };
  }

  componentDidMount() {
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', this.handleDragOver.bind(this), false);
    dropZone.addEventListener('drop', this.handleFileSelect.bind(this), false);
  }

  uniqueId(json) {
    var ide = []
    json.map(p => {
      if (p.fields) {
        p.fields && p.fields.map(f => {
          ide.push(f.id)
        })
      }
    })
    return ide
  }

  getLinking(json) {
    var ide = []
    json.map(p => {
      if (p.fields) {
        p.fields && p.fields.map(f => {
          f.linking && f.linking.map(m => {
            ide.push(...m)
          })
        })
      }
    })
    return ide
  }

  handleFile = e => {
    var files = e.target.files
    var filename = files[0].name
    this.setState({ name: filename })
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    var total = []
    fileReader.onload = e => {

      try {

        const json = JSON.parse(e.target.result)

        const ide = this.uniqueId(json)

        const linking = this.getLinking(json)

        json.map(p => {

          var result = []

          if (!p.fields) {
            result.push({ id: '', page: p.page, item: 0, error: ['FIELDS data missing'] })
          }

          p.fields && p.fields.map((f, index) => {

            var errors = []

            const ling = []

            f.linking && f.linking.map(lin => {
              ling.push(...lin)
            })

            const noInId = ling.filter(l => !INID(ide, l) && l != "")

            if (noInId.length != 0) {

              noInId.map(no => {
                errors.push('Linking item not in Unique ID list: ' + no)
              })
            }

            const noInLink = INID(linking, f.id)

            if (noInLink == false && f.id.split(" ").join("").length != 0) {
              errors.push('Unique ID not in linking list: ' + f.id)
            }

            const dup = DUP(ide, f.id)
            if (dup == true && f.id.split(" ").join("").length != 0) {
              errors.push('Duplicated id: ' + f.id)
            }

            if (f.id.split(" ").join("").length == 0) {
              errors.push('Unique id: Empty')
            }

            if (!whiteList.includes(f.label)) {
              errors.push('Label error: ' + (f.label.split(" ").join("").length == 0 ? 'Empty' : f.label))
            }

            if (f.box.length != 4) {
              errors.push('Bounding box error, box length: ' + f.box.length)
              result.push({ id: f.id, page: p.page, item: index, error: errors })
            } else {

              let left = f.box[0]
              if (parseFloat(left) <= 0) {
                errors.push('Invalid bounding value left: ' + left)
              }
              let top = f.box[1]
              if (parseFloat(top) <= 0) {
                errors.push('Invalid bounding value top: ' + top)
              }
              let right = f.box[2]
              if (parseFloat(right) <= 0) {
                errors.push('Invalid bounding value right: ' + right)
              }
              let bottom = f.box[3]
              if (parseFloat(bottom) <= 0) {
                errors.push('Invalid bounding value bottom: ' + bottom)
              }

              if (top > bottom && left > right) {
                errors.push('Wrong bounding value: top > bottom èn left > right')
              } else if (top > bottom && left < right) {
                errors.push('Wrong boudning box value: top > bottom')
              } else if (top < bottom && left > right) {
                errors.push('Wrong bounding box value: left > right')
              }
              result.push({ id: f.id, page: p.page, item: index, error: errors })
            }

          })

          total.push(result.filter(e => e.error.length != 0))

        });

      } catch (e) {
        alert(e)
      }
      this.setState({ data: total })
    };
  };

  handleFileDrag = (e) => {
    var files = e.dataTransfer.files;
    var filename = files[0].name
    this.setState({ name: filename })
    const fileReader = new FileReader();
    fileReader.readAsText(files[0], "UTF-8");
    var total = []

    fileReader.onload = e => {
      try {

        const json = JSON.parse(e.target.result)

        const ide = this.uniqueId(json)

        const linking = this.getLinking(json)

        json.map(p => {

          var result = []

          if (!p.fields) {
            result.push({ id: '', page: p.page, item: 0, error: ['FIELDS data missing'] })
          }

          p.fields && p.fields.map((f, index) => {

            var errors = []

            const ling = []

            f.linking && f.linking.map(lin => {
              ling.push(...lin)
            })

            const noInId = ling.filter(l => !INID(ide, l) && l != "")

            if (noInId.length != 0) {
              noInId.map(no => {
                errors.push('Linking item not in Unique ID list: ' + no)
              })
            }

            const noInLink = INID(linking, f.id)

            if (noInLink == false && f.id.split(" ").join("").length != 0) {
              errors.push('Unique ID not in linking list: ' + f.id)
            }

            const dup = DUP(ide, f.id)
            if (dup == true && f.id.split(" ").join("").length != 0) {
              errors.push('Duplicated id: ' + f.id)
            }

            if (f.id.split(" ").join("").length == 0) {
              errors.push('Unique id: Empty')
            }

            if (!whiteList.includes(f.label)) {
              errors.push('Label error: ' + (f.label.split(" ").join("").length == 0 ? 'Empty' : f.label))
            }

            if (f.box.length != 4) {
              errors.push('Bounding box error, box length: ' + f.box.length)
              result.push({ id: f.id, page: p.page, item: index, error: errors })
            } else {

              let left = f.box[0]
              if (parseFloat(left) <= 0) {
                errors.push('Invalid bounding value left: ' + left)
              }
              let top = f.box[1]
              if (parseFloat(top) <= 0) {
                errors.push('Invalid bounding value top: ' + top)
              }
              let right = f.box[2]
              if (parseFloat(right) <= 0) {
                errors.push('Invalid bounding value right: ' + right)
              }
              let bottom = f.box[3]
              if (parseFloat(bottom) <= 0) {
                errors.push('Invalid bounding value bottom: ' + bottom)
              }

              if (top > bottom && left > right) {
                errors.push('Wrong bounding value: top > bottom èn left > right')
              } else if (top > bottom && left < right) {
                errors.push('Wrong boudning box value: top > bottom')
              } else if (top < bottom && left > right) {
                errors.push('Wrong bounding box value: left > right')
              }
              result.push({ id: f.id, page: p.page, item: index, error: errors })
            }

          })

          total.push(result.filter(e => e.error.length != 0))

        });
      } catch (e) {
        alert(e)
      }
      this.setState({ data: total })
    }
  };

  getE(ee) {
    var er = 0
    ee.map(e => {
      er += e.length
    })
    return er
  }

  handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.dataTransfer.files; // FileList object.
    this.handleFileDrag(e)

    // console.log(files)
    // var files = e//.target.files

  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  render() {
    const { data, name } = this.state;
    // console.log(data.filter(e => e.length != 0))
    const err = data.filter(e => e.length != 0)

    return (
      <Fragment
      >
        <div style={{ fontSize: 20, color: 'green', margin: 10 }}>
          JSON CHECK
        </div>
        <div style={{ padding: 30 }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }} >
            <input
              style={{ width: 100 }}
              id="drop_zone"
              type="file"
              accept=".json"
              title=" "
              value={this.state.pagetwodata}
              onChange={this.handleFile.bind(this)}
            />
            <div style={{ marginRight: 10 }}>
              {name}
            </div>
            <div>
              {err.length != 0 && `| Total Errors: ${this.getE(err)}`}
            </div>
          </div>
          {err.length != 0 && err.map(e => {
            return (
              <ROW index={e} data={e}
              // copy={(copy) => this.setState({ copy }, () => {
              // const context = this.state.copy;
              // context.select();
              // document.execCommand("copy");
              // })} 
              />
            )
          })}
          {err.length == 0 && name.length != '' &&
            <h1 style={{ color: 'green' }}>No Error Found</h1>
          }
        </div>
      </Fragment>
    );
  }
}

export default Login;
