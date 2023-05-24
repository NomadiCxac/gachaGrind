let currentQuestList = [];

export default function addQuest (currentQuestList, quest) {
    currentQuestList.push(quest);

    return currentQuestList;
}