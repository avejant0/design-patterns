import { ImageFieldBuilder, SelectFieldBuilder, TextFieldBuilder } from "../../patterns/creational";

describe('Builder', () => {
  it('should build successfuly text field', async () => {
    const textBuilder = new TextFieldBuilder();

    const textField1 = textBuilder
      .setTitle('First Text Field')
      .setType()
      .build();

    const textField2 = textBuilder
      .setTitle('Second Text Field')
      .setType()
      .build();

    expect(textField1.getInfo()).toEqual('Field info\ntitle: First Text Field\ntype: text\n');
    expect(textField2.getInfo()).toEqual('Field info\ntitle: Second Text Field\ntype: text\n');
  });

  it('should build successfuly select field', async () => {
    const selectBuilder = new SelectFieldBuilder();
    const selectField = selectBuilder
      .setTitle('Select Field')
      .setType()
      .setOptions(['One', 'Two', 'Three'])
      .build();

    expect(selectField.getInfo()).toEqual('Field info\ntitle: Select Field\ntype: select\noptions: One,Two,Three\n');
  });

  it('should build successfully image field', async () => {
    const imageBuilder = new ImageFieldBuilder();
    const imageField = imageBuilder
      .setTitle('Image Field')
      .setType()
      .setSize({ width: 100, height: 100 })
      .build();

    expect(imageField.getInfo()).toEqual('Field info\ntitle: Image Field\ntype: image\nsize: 100 x 100\n');
  });
});