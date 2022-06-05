const Data = {
  sphere: {
    first: {
      sphereAnimation: {
        target: "First",
        rotate: "0deg",
        translateX: [2, -4],
        translateY: [2, -4],
        percent: 1,
      },
      xPos: -9,
      yPos: -9,
      scale: 1,
      xPosRatio: 1.5,
      yPosRatio: 2,
      scaleRatio: 0.1,
      name: "first",
      target: "First",
    },
    two: {
      sphereAnimation: {
        target: "Two",
        rotate: "90deg",
        translateX: [4, 8],
        translateY: [12, 4],
        percent: -1,
      },
      xPos: -17,
      yPos: 8,
      scale: 1.1,
      xPosRatio: 4,
      yPosRatio: 4.8,
      scaleRatio: 0.1,
      name: "two",
      target: "Two",
    },
    three: {
      sphereAnimation: {
        target: "Three",
        rotate: "90deg",
        translateX: [4, 8],
        translateY: [12, 4],
        percent: -1,
      },
      xPos: 9,
      yPos: 3,
      scale: 1,
      xPosRatio: 6,
      yPosRatio: 5,
      scaleRatio: 0.2,
      name: "three",
      target: "Three",
    },
  },
  card: {
    first: {
      xPos: 26,
      yPos: 9,
      xRot: 2,
      yRot: 1,
      zRot: 2,
      rot: 296,

      xPosition: (e) => 25 + e * 2,
      yPosition: (e) => 7 + -(-e * 5),
      xRotation: (e) => 2 + e * 1.2,
      yRotation: (e) => 1 + e * 1.5,

      name: "firstCard",
    },
    two: {
      xPos: 6,
      yPos: 2,
      xRot: 1,
      yRot: 1,
      zRot: 1,
      rot: 320,

      xPosition: (e) => 5 + e * 4,
      yPosition: (e) => 1 + e * 5,
      xRotation: (e) => 1 + e,
      rotation: (e) => 320 + -(e * 5),

      name: "secondCard",
    },
    three: {
      xPos: -11,
      yPos: -3,
      xRot: 2,
      yRot: 1,
      zRot: 1,
      rot: 360,

      xPosition: (e) => -11 + e * 3,
      yPosition: (e) => -3 + e * 2,
      rotation: (e) => 360 + -(e * 31),

      name: "thirdCard",
    },
  },
};
export default Data;
