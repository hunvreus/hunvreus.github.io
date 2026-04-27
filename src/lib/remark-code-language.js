export function remarkCodeLanguage() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== "code" || node.lang) {
        return;
      }

      if (node.value.trimStart().startsWith("<?php")) {
        node.lang = "php";
      }
    });
  };
}

function visit(node, callback) {
  callback(node);

  if (!node.children) {
    return;
  }

  for (const child of node.children) {
    visit(child, callback);
  }
}
